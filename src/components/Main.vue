<template>
  <div class="main">
    <ul class="main-info">
      <li class="someRight">
        <dt><i class="icon-bookmark"></i>Basic info. 基本信息</dt>
        <dd><strong>个人信息:</strong> <span>于成杰 / 男</span></dd>
        <dd>
          <strong>毕业院校:</strong>
          <span> 杭州电子科技大学（2013.06 - 2017.06）</span>
        </dd>
        <dd><strong>工作年限:</strong> <span>16.07-至今</span></dd>
        <dd><strong>常用ID:</strong> <span>Jake</span></dd>
        <dd>
          <strong>博客:</strong>
          <a href="https://i.jakeyu.top/" target="_blank"> i.jakeyu.top</a>
        </dd>
        <dd>
          <strong>GitHub:</strong>
          <a href="https://github.com/JakeLaoyu" target="_blank">
            github.com/JakeLaoyu
          </a>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=JakeLaoyu&type=follow&count=true"
            frameborder="0"
            scrolling="0"
            width="170px"
            height="20px"
          />
        </dd>
      </li>
      <li>
        <dt><i class="icon-bookmark"></i>Experience. 项目与工作经验</dt>

        <h3>
          <img src="//blogimg.jakeyu.top/resume/有赞.png" data-action="zoom" />
          <span>有赞（2019.04 - 至今，前端开发工程师）</span>
        </h3>

        <ul class="exp">
          <li>
            <div class="circle"></div>
            <h4>微商城交易组（2019.04 - 2020.08）</h4>
            <p>微商城是有赞核心赢利 sass 产品，为商家提供线上商城服务。</p>
            <p>
              负责微商城购物车、下单、订单、物流等交易相关 H5、小程序页面开发。
            </p>
          </li>

          <li>
            <div class="circle"></div>
            <h4>微商城营销组（2020.08 - 2021.01）</h4>
            <p>
              负责微商城优惠券，满减送、大转盘等 N 多营销相关
              H5、小程序页面开发。
            </p>
            <p>
              作为营销业务
              mentor，承接各业务方共建需求，把控技术方案和代码质量。
            </p>
          </li>

          <li>
            <div class="circle"></div>
            <h4>旺小店业务（2021.01 - 至今）</h4>
            <p>
              旺小店是有赞战略计划针对下沉市场开发的产品，面向三四线县城/城市的市场。
            </p>
            <p>
              使用 B/C
              端一体的微信小程序。核心能力包括消费红包、社群接龙、次卡、储值等帮助商家引流到店。
            </p>
          </li>
        </ul>

        <h3>
          <img
            src="//blogimg.jakeyu.top/resume/resume-dxy.png"
            data-action="zoom"
          />
          <span>丁香园（2017.04 - 2019.03，前端开发工程师）</span>
        </h3>

        <ul class="exp">
          <li>
            <div class="circle"></div>
            <h4>丁香播咖</h4>
            <p>
              为医药专业人士打造的学术性直播平台，包括专家讲座、课程直播、会议推广等服务，更为每一位学术大咖提供“自助式工具”，助力医生个人品牌打造。
            </p>
            <p>
              一共两名前端。负责
              <a href="http://e.dxy.cn/broadcast" target="_blank">丁香播咖</a>
              PC端、移动端、活动平台、后台开发维护。使用vue、vuex、vue-router进行开发。使用vue
              webpack模版，封装axios进行异步请求。
            </p>
            <ul class="list">
              <li>
                由于原React后台中包含大量中台的代码，中台现在已经废弃，而且中台和后台有耦合，为了解决项目包含大量无用代码的问题，我利用空闲时间对其进行vue重构。根据业务提取复用组件，方便业务扩展、提升了后台可靠性。
              </li>
              <li>
                腾讯云直播是我加入播咖后主要负责的内容。腾讯云直播通过IE插件，通过录屏的方式，解决了讲师视频和PPT不同步问题，同时也支持OBS推流。节省了平台的成本。
              </li>
              <li>
                接入Sentry错误监控系统，及时修复bug，保证了用户体验和产品稳定
              </li>
              <li>
                推动项目前后端完全分离，使用gitlab
                ci持续集成，脱离体验极差的发布系统，提升资源发布的可靠性，提升开发效率。
              </li>
              <li>
                项目对SEO依赖比较高，但是之前由后端渲染入口文件，提供关键字的方式做SEO。接手项目后，感觉这种方式体验极差，而且内容通过异步获取，这也是对于SEO不利的。于是使用prerender做SEO工作，获得了很好的SEO效果。
              </li>
            </ul>
          </li>
          <li>
            <div class="circle"></div>
            <h4>丁香智汇（临时）</h4>
            <ul class="list">
              <li>
                负责
                <a href="https://e.dxy.cn/college/" target="_blank">丁香智汇</a>
                管理后台、H5、微信小程序开发
              </li>
              <li>管理后台使用 vue + iview 进行开发</li>
              <li>
                h5主要提供文章详情和展示协议功能，内置在app端或者微信小程序端，以webView的形式呈现
              </li>
              <li>小程序提供智汇号信息、交流评论等功能。使用wepy框架开发。</li>
            </ul>
          </li>
          <li>
            <div class="circle"></div>
            <h4>商业项目和H5</h4>
            <ul class="list">
              <li>
                负责部分丁香园 商业项目
                的开发维护，商业项目作为丁香园最大的营收来源，为药企提供营销、数据服务和信息技术服务
              </li>
              <li>商业项目使用 webpack 和 postcss 构建</li>
              <li>专区项目 兼容IE8、移动端自适应</li>
              <li>大量h5活动</li>
            </ul>
          </li>
          <li>
            <div class="circle"></div>
            <h4>
              <span>组内公共资源</span>
            </h4>
            <ul class="list">
              <li>
                将原发布在公共npm仓库的包提交到内网仓库，提升安全性和安装效率。
              </li>
              <li>
                参与并维护基于微信SDK、腾讯视频播放器、后台百度富文本编辑器等封装的插件。
              </li>
            </ul>
          </li>
          <li>
            <div class="circle"></div>
            <h4>
              <span>基于webpack+gulp脚手架</span>
              <a
                href="https://github.com/JakeLaoyu/generator-jake-front"
                target="_blank"
              >
                <i class="icon-link"></i>
                源代码
              </a>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=JakeLaoyu&repo=generator-jake-front&type=star&count=true"
                frameborder="0"
                scrolling="0"
                width="170px"
                height="20px"
              />
            </h4>
            <ul class="list">
              <li>
                超级好用的 H5 脚手架，基于yeoman搭建，使用gulp +
                webpack，实现代码压缩丑化，热更新，代码向下兼容，自动开启浏览器，区分开发环境等功能
              </li>
              <li>原生 js + es6 编写，无任何依赖，使用 webpack 和 sass 构建</li>
              <li>
                成为公司ECD部门开发h5的首选脚手架，一行命令生成h5开发环境，提高组内开发效率，统一H5配置环境。
              </li>
            </ul>
          </li>
        </ul>

        <h3>
          <img
            src="//blogimg.jakeyu.top/resume/3iy9938hzccq9vsmyiqf2vkfqajjdlju.png"
            data-action="zoom"
          /><span>传化科技服务有限公司（2016.07 - 2017.04）</span>
        </h3>
        <ul class="exp">
          <li>
            <div class="circle"></div>
            <h4>绿科邦</h4>
            <ul class="list">
              <li>共两名前端工程师，负责对旧版社区的改版，更新迭代</li>
              <li>使用less完成样式布局，使用jQuery完成交互</li>
              <li>
                对旧版进行了完全更改，新版社区界面优雅，交互清晰，提高了用户访问量以及用户的体验。
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <h3>个人项目</h3>
        <ul class="exp">
          <li>
            <div class="circle"></div>
            <h4>
              <span>车友会(微信小程序)(现在已经停止服务)</span>
            </h4>
            <ul class="list">
              <li>
                独自负责车友会小程序的前端和后端开发，并搭建服务器(centos)环境。
              </li>
              <li>
                学习了微信小程序的开发流程，后端使用nodejs进行开发，使用mongodb数据库对数据对象进行存储，redis数据库完成数据缓存。
              </li>
              <li>
                解决了腾讯地图和百度地图坐标统一化的问题；使用redis数据库对用户请求百度地图api计算距离后数据进行缓存，提高性能；实现小程序地区选择三级联动；后端使用request模块实现循环异步请求。
              </li>
            </ul>
          </li>

          <li>
            <div class="circle"></div>
            <h4>
              <span>UMeditor vue版</span>
              <a href="https://github.com/JakeLaoyu/v-umeditor" target="_blank"
                ><i class="icon-link"></i>源代码</a
              >
              <a
                href="https://jakelaoyu.github.io/v-umeditor/static/index.html"
                target="_blank"
              >
                <i class="icon-link"></i>
                Demo
              </a>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=JakeLaoyu&repo=v-umeditor&type=star&count=true"
                frameborder="0"
                scrolling="0"
                width="170px"
                height="20px"
              />
            </h4>
            <ul class="list">
              <li>
                UMeditor 1.2.3 进行二次封装成Vue组件。
                加入自定义UI，适应现代风格
              </li>
            </ul>
          </li>

          <li>
            <div class="circle"></div>
            <h4>
              <span>七牛图床管理</span>
              <a
                href="https://github.com/JakeLaoyu/qiniu-files-manager"
                target="_blank"
              >
                <i class="icon-link"></i>
                源代码
              </a>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=JakeLaoyu&repo=qiniu-files-manager&type=star&count=true"
                frameborder="0"
                scrolling="0"
                width="170px"
                height="20px"
              ></iframe>
            </h4>

            <ul class="list">
              <li>
                平时在使用七牛管理控制台的时候不是很方便，所以决定按照自己的需求写一个。
              </li>
              <li>
                使用vue、vuex、vue-router、axios、iview、iconfont、expressjs、七牛SDK
                等完成
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <dt><i class="icon-bookmark"></i>Skill. 技能清单</dt>
        <h3>前端</h3>

        <ul class="exp">
          <li>
            <div class="circle"></div>
            <h4>HTML / CSS</h4>
            <p>能够编写语义化的 HTML，模块化的 CSS，完成较复杂的布局</p>
            <p>熟悉 Less Sass PostCSS Autoprefixer 等CSS预处理和模块化工具</p>
          </li>
          <li>
            <div class="circle"></div>
            <h4>JavaScript</h4>
            <p>熟悉原生 Javascript，ES6，能脱离 jQuery 等类库编码</p>
            <p>能运用模块化、面向对象的方式编程</p>
            <p>熟悉 Vue jQuery 的使用</p>
          </li>
          <li>
            <div class="circle"></div>
            <h4>其他</h4>
            <p>了解 Webpack Gulp 等前端自动化工具</p>
            <p>了解前端安全、性能优化方面的一些知识</p>
            <p>了解小程序开发模式及api</p>
            <p>
              了解
              <a
                target="_blank"
                href="https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83"
              >
                BEM CSS
              </a>
              命名规范
            </p>
          </li>
        </ul>
        <h3>后端</h3>
        <ul class="exp">
          <li>
            <div class="circle"></div>
            <h4>Node.js</h4>
            <p>
              了解 Node.js 的开发，使用 expressjs 或 koa2 进行开发，使用 MongoDB
              和 Redis 做数据存储和缓存，使用 pm2 部署
            </p>
          </li>
        </ul>
        <h3>其他属性</h3>
        <ul class="exp">
          <li>
            <p>
              <a
                href="https://juejin.im/user/57c571fd0a2b58006c0847de"
                target="_blank"
              >
                掘金
              </a>
              重度用户，掘金联合编辑
            </p>
            <p>
              轻微强迫症，注意
              <a
                href="https://github.com/standard/eslint-config-standard"
                target="_blank"
              >
                代码规范
              </a>
            </p>
            <p>Mac重度用户</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
$mainColor: #00a1d6;
$secondColor: #f25d8e;
$thirdColor: #01579b;

.main {
  flex-grow: 1;
  left: 300px;
  width: 720px;
  padding: 15px 20px 10000px;
  background: #fff;
  margin-bottom: -10000px;
}

.main a {
  color: $secondColor;
}

.main-info > li {
  padding-top: 20px;
}

.main-info dt {
  font-size: 24px;
  color: $mainColor;
  line-height: 30px;
  border-bottom: 1px solid #{$mainColor};
  margin: 0 0 15px -5px;
}

.main-info dd {
  font-size: 15px;
  line-height: 27px;
  color: #616161;
  margin-left: 25px;

  strong {
    color: #000;
    vertical-align: middle;
    font-size: 16px;
  }

  span {
    vertical-align: middle;
  }

  a {
    vertical-align: middle;
  }
}

.github-button {
  font-size: 0;
}

iframe {
  margin: 0 10px;
  vertical-align: middle;
}

h3 {
  font-size: 19px;
  color: $thirdColor;
  margin: 0 0 15px 5px;

  img {
    vertical-align: middle;
    height: 30px;
    margin-right: 10px;
  }

  span {
    vertical-align: middle;
  }
}

h4 {
  line-height: 30px;
  font-size: 18px;
  color: #000;
  position: relative;
  bottom: 3px;

  span,
  a {
    vertical-align: middle;
  }
}

h5 {
  clear: both;
  font-size: 16px;
  color: #000;
  line-height: 25px;
}

.fa {
  margin-right: 2px;
}

h4 a,
h5 a {
  font-size: 12px;
  border: 1px solid #{$secondColor};
  padding: 1px 3px;
  border-radius: 5px;
  margin-left: 7px;
}

.circle {
  height: 14px;
  width: 14px;
  border-radius: 100%;
  background: $mainColor;
  float: left;
  position: absolute;
  left: -28px;
  top: 5px;
}

.exp {
  border-left: 2px solid #{$mainColor};
  margin-left: 15px;
  list-style: none;
}

.exp p {
  font-size: 15px;
  color: #616161;
  line-height: 23px;
  margin-bottom: 5px;
}

.exp > li {
  position: relative;
  top: -5px;
  margin: 0 0 20px 20px;
}

.exp img {
  max-width: 100%;
}

.efe .task4img img {
  height: 97px;
  width: inherit;
}

.list {
  padding-left: 20px;
  & > li {
    list-style: disc;
    font-size: 15px;
    color: #616161;
    line-height: 23px;
    margin-bottom: 5px;
  }
}
</style>
