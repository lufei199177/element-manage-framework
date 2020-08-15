
Vue.component('m-table', {
    data:function () {
        return {
            tableData:[],
            tableHeight:null,
            currentPage:1,
            pageSize:10,
            pageSizes:[10,20,50,100],
            total:0
        }
    },
    props:{
        tableConfig: {
                type:Object,
                required:true
            },
        searchForm:{
            type:Object,
            required:true
        }
    },
    template:"<div><el-table :data='tableData' :ref='tableConfig.ref' :height='tableHeight' " +
    "highlight-current-row :summary-method='getSummaries' :show-summary='tableConfig.showSummary'" +
    "@selection-change='handleSelectionChange' @row-click='handleRowClick' @row-dblclick='handleRowDbClick'><slot></slot>" +
    "</el-table>" +
    "<el-pagination v-if='tableConfig.showPagination' style='float: right' @size-change='handleSizeChange'" +
    "@current-change='handleCurrentChange' :current-page='currentPage' :page-sizes='pageSizes' :page-size='pageSize' " +
    ":total='total' layout='total, sizes, prev, pager, next, jumper'></el-pagination></div>",
    mounted:function () {
        this.search();
        if(this.tableConfig.height){
            var tableHeight=document.documentElement.clientHeight-this.tableConfig.height;
            this.tableHeight=tableHeight+"px";
        }else{
            var pageHeight=0;
            if(this.tableConfig.showPagination){
                pageHeight=32;
            }
            var tableHeight=document.documentElement.clientHeight-95-pageHeight;
            this.tableHeight=tableHeight+"px";
        }
    },
    methods:{
        search:function () {
            var _this=this;
            if(this.tableConfig.showPagination){
                this.searchForm.pageSize=this.pageSize;
                this.searchForm.currentPage=this.currentPage;
            }
            if(this.tableConfig.url){
                axiosGet(this.tableConfig.url,this.searchForm,function (res) {
                    _this.tableData=res.data.data;
                    if(_this.tableConfig.showPagination){
                        _this.total=res.data.total;
                    }
                })
            }
        },
        handleRowClick:function (row, event, column) {
            this.$emit('row-click', row,event,column);
        },
        handleRowDbClick:function (row,event) {
            this.$emit('row-dblclick', row,event,column);
        },
        handleSelectionChange:function (selection) {
            this.$emit('selection-change', row,event,column);
        },
        handleSizeChange:function(val){
            this.pageSize=val;
            this.search();
        },
        handleCurrentChange:function(val){
            this.currentPage=val;
            this.search();
        },
        getSummaries:function (param) {
            var sums=[];
            var columns=param.columns;
            var data=param.data;
            columns.forEach(function (column,index) {
                if(index===0){
                    sums[index]="合计";
                    return;
                }
                if(data.length<=0){
                    return;
                }
                if(typeof data[0][column.property]!=='number'){
                    sums[index]='';
                    return;
                }
                var sum=0;
                data.forEach(function (value) {
                    sum+=value[column.property];
                });
                sums[index]=sum;
            });
            return sums;
        }
    }
});