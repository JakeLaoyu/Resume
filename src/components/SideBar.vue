<template>
  <div class="sidebar">
    <div class="sidebar__title">
      <img
        src="//blogimg.jakeyu.top/avatar/WechatIMG107.jpeg"
        data-action="zoom"
      />
      <h1>于成杰的简历</h1>
      <h2>In me the tiger sniffs the rose.</h2>
    </div>
    <ul class="sidebar__info">
      <li class="sidebar__some-right">
        <dt><i class="icon-bookmark"></i>Contact. 联系方式</dt>
        <dd><i class="icon-phone-1"></i>电话: 15988826390</dd>
        <dd>
          <i class="icon-mail-alt"></i>邮箱:
          <a href="mailto:e@jakeyu.cn" target="_blank">e@jakeyu.cn</a>
        </dd>
        <dd><i class="icon-wechat"></i>微信: Jake--e</dd>
        <dd>
          <i class="icon-qq"></i>QQ:
          <a
            href="http://wpa.qq.com/msgrd?v=3&uin=944473232&site=qq&menu=yes"
            target="_blank"
          >
            944473232
          </a>
        </dd>
      </li>
      <li class="sidebar__some-right">
        <dt><i class="icon-bookmark"></i>Application. 应聘岗位</dt>
        <dd>前端工程师</dd>
      </li>
    </ul>
    <div class="sidebar__note">
      <p>我是一个对前端、生活和新事物由衷热爱、有趣的前端工程师。</p>
      <p>
        我目前正在寻找前端工程师岗位的工作机会，希望借此为贵公司献上我的一点绵薄之力，快招我到碗里来吧！
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.sidebar {
  top: 0;
  bottom: 0;
  width: 300px;
  padding: 15px 15px 10000px;
  background: #29b6f6;
  color: #fff;
  line-height: 1.5;
  box-sizing: border-box;
  margin-bottom: -10000px;

  a {
    color: #fff;
  }

  &__title {
    margin: 25px 0 20px;
    text-align: center;

    img {
      display: block;
      margin: 0 auto 15px;
      width: 120px;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: normal;
  }

  h2 {
    font-size: 14px;
  }

  &__info {
    li {
      padding-top: 20px;
    }

    dt {
      font-size: 18px;
      color: #fff;
      line-height: 40px;
    }

    dd {
      font-size: 14px;
      line-height: 20px;
    }

    i {
      margin-right: 3px;
    }
  }

  &__some-right {
    dd {
      margin-left: 25px;
    }
  }

  &__note {
    text-indent: 2em;
    margin-top: 90px;
    color: #01579b;
    font-size: 18px;
  }
}
</style>
