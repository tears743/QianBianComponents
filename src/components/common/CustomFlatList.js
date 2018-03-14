import React, {Component} from 'react';
import {View, Dimensions, FlatList, TouchableOpacity, Text, StyleSheet, Platform} from "react-native";
import _const from '../../const/_Const'
import {Toast, WhiteSpace} from 'antd-mobile'
import ListFooter from '../common/ListFooter'
import NoDataView from '../common/NoDataView'
import LoadingView from '../common/LoadingView'
import SearchBarWithSearchTypePanel from '../common/SearchBarWithSearchTypePanel'
import {localStorage} from '../../tools/_RestTools'
import CustomNavBar from './CustomNavBar'
import _ from 'lodash'
import PropTypes from 'prop-types'

export default class CustomFlatList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            params: props.params || {},
            list: {
                data: [],
                pageSize: 10,
                page: 0,
                initWhere: props.initWhere,
            },
            listFooterType: '',
            onEndReachedThreshold: 0,
            headerHeight: 0,
            searchData: props.searchData || {key: 'title', val: ''},
            history: [],
            refreshing: false,
            serviceMethod: props.serviceMethod ,
            historyKey: props.historyKey || '',
            sort: props.sort || 'createdAt,desc',
            ItemComponent: props.ItemComponent,
            title: props.title,
            itemProps: props.itemProps,
            recordSearchHis: false,
        }
    }

    _getData(params, isRefresh) {
        if (isRefresh && !(params.page) || params.page != this.state.list.page) {
            if (isRefresh) {
                this.setState({refreshing: true})
            } else {
                this.setState({listFooterType: 'loading'})
            }
        }
        params = {...params, ...this.props.params}
        if (this.state.id) {
            params = {...params, id: this.state.id, ...this.state.params}
        }

        this.state.serviceMethod({params: params}).then(res => {
            console.info(res)
            if (isRefresh) {
                if (res.page.totalPages === res.page.number + 1) {
                    this.setState({
                        refreshing: false,
                        listFooterType: 'end',
                        list: {...this.state.list, data: res.data, page: res.page.number}
                    })
                } else {
                    this.setState({
                        refreshing: false,
                        listFooterType: 'load',
                        list: {...this.state.list, data: res.data, page: res.page.number}
                    })
                }

            } else {
                if (res.data.length == '0') {
                    this.setState({refreshing: false, listFooterType: 'end'})
                    return
                }
                if (res.page.totalPages === res.page.number + 1) {
                    this.setState({
                        list: {
                            ...this.state.list,
                            page: res.page.number,
                            data: [...this.state.list.data, ...res.data],
                        }, refreshing: false, listFooterType: 'end'
                    })
                    return
                }
                this.setState({
                    list: {...this.state.list, page: res.page.number, data: [...this.state.list.data, ...res.data],},
                    refreshing: false,
                    listFooterType: 'load'
                })
            }

        }).catch((err) => {
                console.info(err.name)
                const typeError = err.name
                this.setState({refreshing: false, listFooterType: 'end'})
                if (err && !typeError) {
                    this.setState({refreshing: false, listFooterType: 'end'})
                    if (err === 'offline') {
                        Toast.fail('亲，您没联网哦！', 3)
                    }
                    else {
                        //Toast.fail(JSON.stringify(err))
                    }
                }
            }
        )
    }

    componentDidMount() {
        this._getData({
            where: this.state.list.initWhere,
            size: this.state.list.pageSize,
            page: this.state.list.page,
            sort: this.state.sort
        }, true)
    }

    renderItems = (item) => {
        const ItemComponent = this.state.ItemComponent
        return <ItemComponent item={item} {...this.props.itemProps}/>
    }
    refreshHandler = () => {
        this._getData({
            where: this.state.list.initWhere,
            page: 0,
            sort: this.state.sort,
            size: this.state.list.pageSize
        }, true)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.refreshing && (!this.state.refreshing)) {
            if (nextProps.initWhere) {
                this.setState({
                    list: {refreshing: nextProps.refreshing, ...this.state.list, initWhere: nextProps.initWhere}
                }, () => {
                    this.refreshHandler()
                })
            } else if (nextProps.params) {
                console.log(nextProps.params)
                this.setState({
                    refreshing: nextProps.refreshing,
                    params: {...this.state.params, ...nextProps.params}
                }, () => {
                    this.refreshHandler()
                })
            }
            else {
                this.refreshHandler()
            }

        }
        if (nextProps.itemProps && nextProps.itemProps.status && nextProps.itemProps.status !== this.state.itemProps.status) {
            this.setState({itemProps: nextProps.itemProps})
        }
    }

    onSearchTypeChange = (val) => {
        console.log(val)
        this.setState({searchData: {...this.state.searchData, key: this.state.searchData.key}}, () => {
            this.onSearchSubmit()
        })

    }
    getTag = () => {
        if (this.state.recordSearchHis) {
            localStorage.getItem(this.state.historyKey).then(his => {
                console.log(his)
                const history = []
                if (his) {
                    const historyKey = JSON.parse(his)
                    historyKey.map(item => {
                        history.push(<TouchableOpacity onPress={() => this.onHistoryPress(item)} key={item}>
                            <Text style={{
                                marginLeft: 10,
                                borderWidth: 1,
                                borderRadius: 10,
                                padding: 3,
                                fontSize: 14,
                                color: _const.Color.primary
                            }}> {item}</Text>
                        </TouchableOpacity>)
                    })
                }
                this.setState({history: history})
            })
        }


    }

    onSearchSubmit = () => {


        const params = {
            where: [...this.state.list.initWhere, {
                name: this.state.searchData.key,
                operator: 'like',
                value: this.state.searchData.val
            }], page: 0, sort: this.state.sort, size: this.state.list.pageSize
        }
        console.log(params.where)
        if (this.state.searchData.val && this.state.recordSearchHis) {
            localStorage.getItem(this.state.historyKey).then(his => {
                console.log(his)
                let projectHistory = []
                if (his) {
                    projectHistory = JSON.parse(his)

                    // projectHistory.push(this.state.searchData.val)

                } else {
                    projectHistory.push(this.state.searchData.val)
                    localStorage.setItem(this.state.historyKey, JSON.stringify(projectHistory))
                }

            })
        }


        this._getData(params, true)

    }
    _loadMore = () => {
        if (this.state.searchData.val) {
            this._getData({
                where: [...this.state.list.initWhere, {
                    name: this.state.searchData.key,
                    operator: 'like',
                    value: this.state.searchData.val
                }], page: this.state.list.page + 1, sort: this.state.sort, size: this.state.list.pageSize
            }, false)
        } else {
            this._getData({
                where: this.state.list.initWhere,
                page: this.state.list.page + 1,
                sort: this.state.sort,
                size: this.state.list.pageSize
            }, false)
        }

    }
    onSearchValueChange = (val) => {
        this.setState({searchData: {...this.state.searchData, val: val}})
    }
    onSearchCancel = () => {
        this.setState({searchData: {...this.state.searchData, val: ''}})
        this._getData({
            where: [...this.state.list.initWhere],
            size: this.state.list.pageSize,
            page: this.state.list.page,
            sort: this.state.sort
        }, true)
    }
    onHistoryPress = (val) => {
        this.setState({history: [], searchData: {...this.state.searchData, val: val}}, () => {
            this.onSearchTypeChange(0)
        })
    }

    render() {


        const searchTypeComponent = <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 5,
            justifyContent: 'flex-start',
            alignSelf: 'flex-start'
        }}>
            <WhiteSpace/>
            {this.state.history}
            <WhiteSpace/>
        </View>
        const header = this.props.hideSearch ? this.props.header ? this.props.header : null : this.props.header ? <View>
                <SearchBarWithSearchTypePanel onFocus={this.getTag} searchTypeComponent={searchTypeComponent}
                                              defaultValue={this.state.searchData.val} onCancel={this.onSearchCancel}
                                              onSearchChange={this.onSearchValueChange} onSubmit={this.onSearchSubmit}/>
                {this.props.header}
            </View> :
            <SearchBarWithSearchTypePanel onFocus={this.getTag} searchTypeComponent={searchTypeComponent}
                                          defaultValue={this.state.searchData.val} onCancel={this.onSearchCancel}
                                          onSearchChange={this.onSearchValueChange} onSubmit={this.onSearchSubmit}/>

        if (!this.state.list.data.length && this.state.refreshing) {
            return (
                <LoadingView/>
            )
        }
        if (!this.state.list.data.length) {
            return (
                <NoDataView header={header} refresh={this.refreshHandler}/>
            )
        }
        const navBar = this.props.hideNavBar ? [] : <CustomNavBar title={this.state.title}/>
        const wrapperStyle = this.props.fullScreen ? StyleSheet.create({
            wrapper: {
                backgroundColor: _const.Color.white,
                height: Dimensions.get('window').height - 40
            }
        }) : StyleSheet.create({
            wrapper: {
                flex: 1,
                backgroundColor: _const.Color.white
            }
        })

        return (
            <View style={wrapperStyle.wrapper}>
                {navBar}
                <FlatList

                    onScroll={this.props.onScroll}
                    scrollEventThrottle={this.props.throttle}
                    ListHeaderComponent={header}
                    data={this.state.list.data}
                    renderItem={({item}) => this.renderItems(item)}
                    keyExtractor={(item, index) => item.id ? item.id : index}
                    initialNumToRender={this.state.list.pageSize}
                    refreshing={this.state.refreshing}
                    onRefresh={this.refreshHandler}
                    // onPressItem={this._onPressItem}
                    ListFooterComponent={<ListFooter listFooterStyle={this.props.listFooterStyle || {}}
                                                     onPress={this._loadMore.bind(this)}
                                                     listFooterType={this.state.listFooterType}/>}
                />
            </View>
        )
    }
}
/*
* @Author Tears
* @name CustomFlatList
* @params :searchData:{key:yourSearchKeyName,val:defaultSearchValue}
*       serviceMethod your request method,return a promise
*       historyKey: this component record the search word as history of search,this params is the key recorded in AsyncStorage
*       sort: the list sort value,example:'createdAt,desc'
*       ItemComponent : renderItem needs this component
*       title:the title of this component
* */
CustomFlatList.propTypes = {
    searchData: PropTypes.object,
    serviceMethod: PropTypes.func,
    historyKey: PropTypes.string,
    sort: PropTypes.string,
    ItemComponent: PropTypes.any.isRequired,
    title: PropTypes.string,
    initWhere: PropTypes.array
}
