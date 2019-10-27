<template>
<div>
    <cu-custom bgColor="bg-gradual-pink" :isBack="true"><div slot="backText">返回</div><div slot="content">操作条</div></cu-custom>
   
    <div class="cu-bar bg-white margin-top">
        <div class="action">
            <p class="cuIcon-title text-green"><span></span></p>
            <p><span>底部操作条</span></p>
        </div>
    </div>
    <div class="box">
        <div class="cu-bar tabbar bg-white">
            <div class="action">
                <div class="cuIcon-cu-image">
                    <uni-image>
                        <div
                            style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;/static/tabbar/basics_cur.png&quot;);">
                        </div><img src="/static/tabbar/basics_cur.png">
                        <!---->
                    </uni-image>
                </div>
                <div class="text-green">元素</div>
            </div>
            <div class="action">
                <div class="cuIcon-cu-image">
                    <uni-image>
                        <div
                            style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;/static/tabbar/component.png&quot;);">
                        </div><img src="/static/tabbar/component.png">
                        <!---->
                    </uni-image>
                </div>
                <div class="text-gray">组件</div>
            </div>
            <div class="action">
                <div class="cuIcon-cu-image">
                    <uni-image>
                        <div
                            style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;/static/tabbar/plugin.png&quot;);">
                        </div><img src="/static/tabbar/plugin.png">
                        <!---->
                    </uni-image>
                    <div class="cu-tag badge">99</div>
                </div>
                <div class="text-gray">扩展</div>
            </div>
            <div class="action">
                <div class="cuIcon-cu-image">
                    <uni-image>
                        <div
                            style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;/static/tabbar/about.png&quot;);">
                        </div><img src="/static/tabbar/about.png">
                        <!---->
                    </uni-image>
                    <div class="cu-tag badge"></div>
                </div>
                <div class="text-gray">关于</div>
            </div>
        </div>
        <div class="cu-bar tabbar margin-bottom-xl bg-black">
            <div class="action text-orange">
                <div class="cuIcon-homefill"></div>首页
            </div>
            <div class="action text-gray">
                <div class="cuIcon-similar"></div>分类
            </div>
            <div class="action text-gray">
                <div class="cuIcon-recharge"></div>积分
            </div>
            <div class="action text-gray">
                <div class="cuIcon-cart">
                    <div class="cu-tag badge">99</div>
                </div>购物车
            </div>
            <div class="action text-gray">
                <div class="cuIcon-my">
                    <div class="cu-tag badge"></div>
                </div>我的
            </div>
        </div>
        <div class="cu-bar tabbar margin-bottom-xl bg-white">
            <div class="action text-green">
                <div class="cuIcon-homefill"></div>首页
            </div>
            <div class="action text-gray">
                <div class="cuIcon-similar"></div>分类
            </div>
            <div class="action text-gray add-action">
                <button class="cu-btn cuIcon-add bg-green shadow"></button>发布
            </div>
            <div class="action text-gray">
                <div class="cuIcon-cart">
                    <div class="cu-tag badge">99</div>
                </div>购物车
            </div>
            <div class="action text-gray">
                <div class="cuIcon-my">
                    <div class="cu-tag badge"></div>
                </div>我的
            </div>
        </div>
        <div class="cu-bar tabbar bg-black">
            <div class="action text-green">
                <div class="cuIcon-homefill"></div>首页
            </div>
            <div class="action text-gray">
                <div class="cuIcon-similar"></div>分类
            </div>
            <div class="action text-gray add-action">
                <button class="cu-btn cuIcon-add bg-green shadow"></button>发布
            </div>
            <div class="action text-gray">
                <div class="cuIcon-cart">
                    <div class="cu-tag badge">99</div>
                </div>购物车
            </div>
            <div class="action text-gray">
                <div class="cuIcon-my">
                    <div class="cu-tag badge"></div>
                </div>我的
            </div>
        </div>
        <div class="cu-bar bg-white tabbar border shop">
            <button class="action" open-type="contact">
                <div class="cuIcon-service text-green">
                    <div class="cu-tag badge"></div>
                </div>客服
            </button>
            <div class="action text-orange">
                <div class="cuIcon-favorfill"></div>已收藏
            </div>
            <div class="action">
                <div class="cuIcon-cart">
                    <div class="cu-tag badge">99</div>
                </div>购物车
            </div>
            <div class="bg-red submit">立即订购</div>
        </div>
        <div class="cu-bar bg-white tabbar border shop">
            <button class="action" open-type="contact">
                <div class="cuIcon-service text-green">
                    <div class="cu-tag badge"></div>
                </div>客服
            </button>
            <div class="action">
                <div class="cuIcon-cart">
                    <div class="cu-tag badge">99</div>
                </div>购物车
            </div>
            <div class="bg-orange submit">加入购物车</div>
            <div class="bg-red submit">立即订购</div>
        </div>
        <div class="cu-bar bg-white tabbar border shop">
            <button class="action" open-type="contact">
                <div class="cuIcon-service text-green">
                    <div class="cu-tag badge"></div>
                </div>客服
            </button>
            <div class="action">
                <div class=" cuIcon-shop"></div>店铺
            </div>
            <div class="action">
                <div class="cuIcon-cart">
                    <div class="cu-tag badge">99</div>
                </div>购物车
            </div>
            <div class="btn-group">
                <button class="cu-btn bg-red round shadow-blur">立即订购</button>
            </div>
        </div>
        <div class="cu-bar bg-white tabbar border shop">
            <button class="action" open-type="contact">
                <div class="cuIcon-service text-green">
                    <div class="cu-tag badge"></div>
                </div>客服
            </button>
            <div class="action">
                <div class="cuIcon-cart">
                    <div class="cu-tag badge">99</div>
                </div>购物车
            </div>
            <div class="btn-group">
                <button class="cu-btn bg-orange round shadow-blur">加入购物车</button>
                <button class="cu-btn bg-red round shadow-blur">立即订购</button>
            </div>
        </div>
    </div>
    <div class="cu-bar bg-white">
        <div class="action">
            <p class="cuIcon-title text-green"><span></span></p>
            <p><span>标题操作条</span></p>
        </div>
    </div>
    <!---->
    <div class="box">
        <div class="cu-bar bg-white">
            <div class="action border-title">
                <p class="text-xl text-bold"><span>关于我们</span></p>
                <p class="bg-grey" style="width: 2rem;"><span></span></p>
            </div>
        </div>
        <div class="cu-bar bg-white">
            <div class="action border-title">
                <p class="text-xl text-bold text-blue"><span>关于我们</span></p>
                <p class="bg-gradual-blue" style="width: 3rem;"><span></span></p>
            </div>
        </div>
        <div class="cu-bar bg-white">
            <div class="action sub-title">
                <p class="text-xl text-bold text-green"><span>关于我们</span></p>
                <p class="bg-green"><span></span></p>
            </div>
        </div>
        <div class="cu-bar bg-white">
            <div class="action sub-title">
                <p class="text-xl text-bold text-blue"><span>关于我们</span></p>
                <p class="text-ABC text-blue"><span>about</span></p>
            </div>
        </div>
        <div class="cu-bar bg-white">
            <div class="action title-style-3">
                <p class="text-xl text-bold"><span>关于我们</span></p>
                <p class="text-Abc text-gray self-end margin-left-sm"><span>about</span>
                </p>
            </div>
        </div>
        <div class="cu-bar bg-white">
            <div class="action">
                <p class="cuIcon-title text-green"><span></span></p>
                <p class="text-xl text-bold"><span>关于我们</span></p>
            </div>
        </div>
        <div class="cu-bar bg-white">
            <div class="action">
                <p class="cuIcon-titles text-green"><span></span></p>
                <p class="text-xl text-bold"><span>关于我们</span></p>
            </div>
        </div>
    </div>
    <div class="cu-bar bg-white">
        <div class="action">
            <p class="cuIcon-title text-green"><span></span></p>
            <p><span>顶部操作条</span></p>
        </div>
    </div>
    <div class="box">
        <div class="cu-bar bg-white">
            <div class="action">
                <p class="cuIcon-back text-gray"><span></span></p>返回
            </div>
            <div class="content text-bold">操作条</div>
        </div>
        <div class="cu-bar bg-white">
            <div class="action">
                <p class="cuIcon-homefill text-gray"><span></span></p>首页
            </div>
            <div class="content text-bold">鲜亮的高饱和色彩，专注视觉的小程序组件库</div>
            <div class="action">
                <p class="cuIcon-cardboardfill text-grey"><span></span></p>
                <p class="cuIcon-recordfill text-red"><span></span></p>
            </div>
        </div>
        <div class="cu-bar bg-blue">
            <div class="action">
                <p class="cuIcon-close"><span></span></p>关闭
            </div>
            <div class="content text-bold">海蓝</div>
        </div>
        <div class="cu-bar bg-black search">
            <div class="cu-avatar round"
                style="background-image: url(&quot;https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg&quot;);">
            </div>
            <div class="content">Join UI</div>
            <div class="action">
                <p class="cuIcon-more"><span></span></p>
            </div>
        </div>
    </div>
    <div class="cu-bar bg-white">
        <div class="action">
            <p class="cuIcon-title text-green"><span></span></p>
            <p><span>搜索操作条</span></p>
        </div>
    </div>
    <div class="box">
        <div class="cu-bar search bg-white">
            <div class="search-form round">
                <p class="cuIcon-search"><span></span></p>
                <input style="position: relative;">
                    <div>
                        <div class="input-placeholder" style="height: 35px; line-height: 35px;">搜索图片、文章、视频</div>
                        <form action=""><input maxlength="140" step="" autocomplete="off" type="search"
                                style="height: 35px; line-height: 35px;"></form>
                    </div>
                    <div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </input>
            </div>
            <div class="action">
                <button class="cu-btn bg-green shadow-blur round">搜索</button>
            </div>
        </div>
        <div class="cu-bar search bg-white">
            <div class="cu-avatar round"
                style="background-image: url(&quot;https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg&quot;);">
            </div>
            <div class="search-form round">
                <p class="cuIcon-search"><span></span></p>
                <input style="position: relative;">
                    <div>
                        <div class="input-placeholder" style="height: 35px; line-height: 35px;">搜索图片、文章、视频</div>
                        <form action=""><input maxlength="140" step="" autocomplete="off" type="search"
                                style="height: 35px; line-height: 35px;"></form>
                    </div>
                    <div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </input>
            </div>
            <div class="action">
                <p><span>广州</span></p>
                <p class="cuIcon-triangledownfill"><span></span></p>
            </div>
        </div>
        <div class="cu-bar bg-red search">
            <div class="cu-avatar round"
                style="background-image: url(&quot;https://ossweb-img.qq.com/images/lol/web201310/skin/big114004.jpg&quot;);">
            </div>
            <div class="search-form radius">
                <p class="cuIcon-search"><span></span></p>
                <input style="position: relative;">
                    <div>
                        <div class="input-placeholder" style="height: 35px; line-height: 35px;">搜索图片、文章、视频</div>
                        <form action=""><input maxlength="140" step="" autocomplete="off" type="search"
                                style="height: 35px; line-height: 35px;"></form>
                    </div>
                    <div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </input>
            </div>
            <div class="action">
                <p><span>广州</span></p>
                <p class="cuIcon-triangledownfill"><span></span></p>
            </div>
        </div>
        <div class="cu-bar bg-cyan search">
            <div class="search-form radius">
                <p class="cuIcon-search"><span></span></p>
                <input style="position: relative;">
                    <div>
                        <div class="input-placeholder" style="height: 35px; line-height: 35px;">搜索图片、文章、视频</div>
                        <form action=""><input maxlength="140" step="" autocomplete="off" type="search"
                                style="height: 35px; line-height: 35px;"></form>
                    </div>
                    <div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </input>
            </div>
            <div class="action">
                <p class="cuIcon-close"><span></span></p>
                <p><span>取消</span></p>
            </div>
        </div>
    </div>
    <div class="cu-bar bg-white">
        <div class="action">
            <p class="cuIcon-title text-green"><span></span></p>
            <p><span>操作条按钮组</span></p>
        </div>
    </div>
    <div class="box">
        <div class="cu-bar btn-group">
            <button class="cu-btn bg-green shadow-blur round lg">保存</button>
        </div>
        <div class="cu-bar btn-group">
            <button class="cu-btn bg-green shadow-blur">保存</button>
            <button class="cu-btn text-green line-green shadow">上传</button>
        </div>
        <div class="cu-bar btn-group">
            <button class="cu-btn bg-green shadow-blur round">保存</button>
            <button class="cu-btn bg-blue shadow-blur round">提交</button>
        </div>
    </div>
    <div class="cu-bar bg-white">
        <div class="action">
            <p class="cuIcon-title text-green"><span></span></p>
            <p><span>输入操作条</span></p>
        </div>
    </div>
    <div class="box">
        <div class="cu-bar input">
            <div class="action">
                <p class="cuIcon-sound text-grey"><span></span></p>
            </div>
            <input cursor-spacing="10" class="solid-bottom">
                <div><input maxlength="300" step="" autocomplete="off" type="" style="height: 35px; line-height: 35px;">
                    <div class="input-placeholder" style="height: 35px; line-height: 35px;"></div>
                </div>
                <div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </input>
            <div class="action">
                <p class="cuIcon-emojifill text-grey"><span></span></p>
            </div>
            <button class="cu-btn bg-green shadow-blur">发送</button>
        </div>
        <div class="cu-bar input">
            <div class="cu-avatar round"
                style="background-image: url(&quot;https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg&quot;);">
            </div>
            <div class="action">
                <p class="cuIcon-roundaddfill text-grey"><span></span></p>
            </div>
            <input cursor-spacing="10" class="solid-bottom">
                <div><input maxlength="300" step="" autocomplete="off" type="" style="height: 35px; line-height: 35px;">
                    <div class="input-placeholder" style="height: 35px; line-height: 35px;"></div>
                </div>
                <div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </input>
            <div class="action">
                <p class="cuIcon-emojifill text-grey"><span></span></p>
            </div>
            <button class="cu-btn bg-green shadow-blur">发送</button>
        </div>
    </div>
</div>
</template>