<template>
    <div class="m-menu">
        <dl class="nav">
            <dt>全部分类</dt>
            <dd>
                <i class="food"></i>
                美食
                <span class="arrow"></span>
            </dd>
            <dd>
                <i class="takeout"></i>
                外卖
                <span class="arrow"></span>
            </dd>
            <dd>
                <i class="hotel"></i>
                美食
                <span class="arrow"></span>
            </dd>
           <dd>
                <i class="food"></i>
                美食
                <span class="arrow"></span>
            </dd>
            
        </dl>

        <div class="detail">
            <template>
                <h4>美食</h4>    
                <span>代金券</span>
                <span>代金券</span>
                <span>代金券</span>
                <span>代金券</span>
                <span>代金券</span>
                <span>代金券</span>
                <span>代金券</span>
                <span>代金券</span>
                <span>代金券</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            menuList:[{
                title:'美食',
                icon:'food',
                children:[
                {
                    title:'美食',
                    children:["美食","美食","美食","美食","美食"]
                }
                ]

            }]
        }
    }
}
</script>