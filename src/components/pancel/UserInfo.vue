<template>
  <div class="user-warpper">
    <div class="bg_banner"></div>

    <div class="user-part1">
        <div class="user-icon"><img src="@/assets/images/icons/noface.jpg" ></div>

        <div class="user-info-list">
            <div class="user-info-count">
                <span class="fans">
                    <span class="num">0</span>
                    <br>
                    <span class="type">粉丝</span>
                </span>
                <span class="split"></span>
                <span class="follow">
                    <span class="num">0</span>
                    <br>
                    <span class="type">关注</span>
                </span>
                <span class="split"></span>
                <span class="likes">
                    <span class="num">0</span>
                    <br>
                    <span class="type">获赞</span>
                </span>
            </div>

            <div class="user-info-btn" @click="showSpace">
                <button>
                    {{btnTitle}}
                </button>
            </div>
        </div>
    </div>

    <div class="user-part2">
        <div class="base">
            <span class="user-name">
                Aaign1号
            </span>
            <span class="user-gender"></span>
            <span class="user-level"></span>
        </div>
        <div class="desc">
            <span class="content">这个人很神秘，什么都没有写</span>
            <span class="open-btn" @click="showUid">{{ openBtnTitle }}</span>
        </div>
        <div class="uid" :class="{show: isactive}">
            uid:15639093
        </div>
    </div>

    <div class="tabs">
        <span :class="{ on: on == 1 }" @click="changeTab(1)">动态</span>
        <span :class="{ on: on == 2 }" @click="changeTab(2)">视频</span>
    </div>

    <div class="edit-user-info" :class="{ show: show }">
        <van-cell title="头像" size="large" class="user-icon" center="">
            <img src="@/assets/images/icons/noface.jpg" >
        </van-cell>
        <van-cell title="呢陈" value="份未发"   />
        <van-cell title="UID" value="15639093"   />
        <van-cell title="性别" value="男"   />
        <van-cell title="出生日期" value="10-10"   />
        <van-cell title="个性签名" value=""   />
        
        <div class="footer">
            <div class="">退出登录</div>
            <div @click="backtoSpace">返回空间</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isactive: true,
            on: 1,
            show: true
        }
    },
    methods: {
        showUid() {
            this.isactive = !this.isactive
        },
        changeTab(index) {
            this.on = index;
        },
        backtoSpace() {
            this.show = true;
        },
        showSpace() {
            this.show = false;
        }
    },
    computed: {
        openBtnTitle() {
            return this.isactive ? '展开' : '收起';
        }
    },
    props: [
        'btnTitle'
    ]
}
</script>

<style lang='less'>
    .user-warpper{
        height: 71.389vw;
    }
    .bg_banner{
        background: url('../../assets/images/banner/bannerTop_new.png');
        height: 25vw;
        background-size: cover;
        background-position: 50%;
    }
    .user-part1{
        padding: 0 3.333vw;
        display: flex;
        justify-content: space-between;
        .user-icon{
            width: 22.4vw;
            height: 22.4vw;
            img{
                background-size: contain;
                max-width: 100%;
                border-radius: 50%;
                position: relative;
                top: -1.389vw;
            }
        }
        .user-info-list{
            padding-top: 2.222vw;
            width: 61.111vw;
            .user-info-count{
                height: 9.167vw;
                display: flex;
                align-items: center;
                .split{
                    width: 0.278vw;
                    height: 4.444vw;
                    background-color: #e7e7e7;
                }
                .fans,.follow,.likes{
                    width: 20vw;
                    text-align: center;
                    .num{
                        color: #212121;
                        font-size: 4.167vw;
                    }
                    .type{
                        color: #999;
                        font-size: 3.889vw;
                    }
                }

            }
            .user-info-btn{
                width: 100%;
                height: 8.333vw;
                button{
                    width: 100%;
                    height: 100%;
                    margin-top: 3.333vw;
                    background-color: #fff;
                    border: 0.278vw solid #fb7299;
                    color: #fb7299;
                    font-size: 3.889vw;
                    border-radius: 0.833vw;
                }
            }
        }
    }
    .user-part2{
        padding: 12px;
        .base{
            height: 34px;
            .user-name{
                max-width: 235px;
                font-size: 19px;
                color: #212121;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
            }
        }
        .desc{
            display: flex;
            justify-content: space-between;
            .content{
                color: #999;
                font-size: 13px;
                margin-top: 8px;
                width: 313px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
            }
            .open-btn{
                color: #1389bf;
                margin-top: 7px;
                width: 26px;
                height: 18px;
                font-size: 13px;
            }
        }
        .show{
            display: none !important;
        }
        .uid{
            background-color: #f4f4f4;
            font-size: 9px;
            color: #505050;
            display: inline-block;
            padding: 3px;
            border-radius: 4px;
            margin-top: 7px;
        }
    }
    .tabs{
        height: 40px;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        line-height: 40px;
        padding-left: 12px;
        span{
            margin-right: 32px;
            color: #757575;
            font-size: 13px;
        }
        .on{
            color: #fb7299;
        }
    }
    .show{
        left: 100% !important;
        right: -100% !important;
    }
    .edit-user-info{
        z-index: 99;
        position: fixed;
        top: 44px;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #f4f4f4;
        padding-top: 12px;
        transition: 0.5s;
        .user-icon{
            height: 66px;
            img{
                width: 46px;
                height: 46px;
                border-radius: 50%;
            }
        }
        .footer{
            margin-top: 20px;
            div:first-child{
                border-bottom: 1px solid #eee;
            }
            div{
                height: 41px;
                text-align: center;
                padding: 10px;
                background-color: #ffffff;
                font-size: 13px;
                color: #505050;
            }
        }
    }
</style>