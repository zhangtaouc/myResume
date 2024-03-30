<template>
  <div class="My-project">
    <div class="title-box">
      <div>我的项目</div>
      <div>
        <span class="desc">简略</span
        ><el-switch
          v-model="isBrief"
          style="--el-switch-on-color: #13ce66"
          inline-prompt
          @change="changeStyle"
        />
      </div>
    </div>
    <div class="project-collapse">
      <el-collapse v-model="activeIndex" accordion>
        <el-collapse-item name="1">
          <template #title>
            <el-icon class="header-icon" color="#66b1ff">
              <Search />
            </el-icon>
            <span class="project-name">洗碗机</span>
          </template>
          <div class="collapse-content">
            1、 海尔智家洗碗机
            该项目属于海尔智家app内嵌h5页面，主用于实时展示用户洗碗机的状态（开关机，当前运行程序，洗碗机童锁开关、运行阶段等），控制洗碗机（调用接口启动程序、开关机，调节参数等），主要用于国内和欧洲东南亚，支持中文和英文，国内日活5万。项目自2020年11月搭建维护至今。
            2、海尔智家洗衣机
            该项目属于海尔智家app内嵌h5页面，主用于实时展示用户洗衣机的状态（开关机，洗衣液余量、运行阶段、程序实际耗水耗电量、烘干都散），控制洗衣机（调用接口启动程序、洗衣液自动投放，调节参数等）。项目自2021年5月搭建维护至今，日活12万。
            3、海尔全球工厂设备生产管理系统
            系统用于录入设备生产工单，记录监控海尔全球各个工厂各批次设备的生产情况，可视化实时展示出来。系统支持中文，英文，阿拉伯语的切换。有总工厂负责人，x工厂负责人，x工厂xx批次负责人，xx批次各流程负责人。共4个角色，目前每日日活3万。目前在全球14个国家78个工厂使用。
            4、海尔智家微信小程序
            海尔智家小程序包括家电控制，活动，商城，个人中心四大模块，用户可以用来绑定家电、控制家电，购买海尔产品。
            5、npm组件库开发 ● 独⾃开发产业通⽤的 @wash/eslit-config的npm
            包，⽤于统⼀团队代码⻛格，提⾼代码质量，⽀持
            JavaScript、vue2、vue3、Prettier，开箱即⽤。 ●
            负责开发海尔洗涤产业公共api组件库npm包，实现按需引入。 ● 参与开发
            vite 插件
            vite-plugin-find-image-duplicates，⽤于排查项⽬是否有重复图⽚。收录在
            vite 官⽅插件列表中。
            <div class="show-detail">
              <el-button size="large" type="success" round>查看</el-button>
            </div>
          </div>
        </el-collapse-item>

        <el-collapse-item name="2">
          <template #title>
            <el-icon class="header-icon" color="#66b1ff">
              <Coin />
            </el-icon>
            <span class="project-name">全球工厂系统</span>
          </template>
          <div class="collapse-content">
            1、 海尔智家洗碗机
            该项目属于海尔智家app内嵌h5页面，主用于实时展示用户洗碗机的状态（开关机，当前运行程序，洗碗机童锁开关、运行阶段等），控制洗碗机（调用接口启动程序、开关机，调节参数等），主要用于国内和欧洲东南亚，支持中文和英文，国内日活5万。项目自2020年11月搭建维护至今。
            2、海尔智家洗衣机
            该项目属于海尔智家app内嵌h5页面，主用于实时展示用户洗衣机的状态（开关机，洗衣液余量、运行阶段、程序实际耗水耗电量、烘干都散），控制洗衣机（调用接口启动程序、洗衣液自动投放，调节参数等）。项目自2021年5月搭建维护至今，日活12万。
            3、海尔全球工厂设备生产管理系统
            系统用于录入设备生产工单，记录监控海尔全球各个工厂各批次设备的生产情况，可视化实时展示出来。系统支持中文，英文，阿拉伯语的切换。有总工厂负责人，x工厂负责人，x工厂xx批次负责人，xx批次各流程负责人。共4个角色，目前每日日活3万。目前在全球14个国家78个工厂使用。
            4、海尔智家微信小程序
            海尔智家小程序包括家电控制，活动，商城，个人中心四大模块，用户可以用来绑定家电、控制家电，购买海尔产品。
            5、npm组件库开发 ● 独⾃开发产业通⽤的 @wash/eslit-config的npm
            包，⽤于统⼀团队代码⻛格，提⾼代码质量，⽀持
            JavaScript、vue2、vue3、Prettier，开箱即⽤。 ●
            负责开发海尔洗涤产业公共api组件库npm包，实现按需引入。 ● 参与开发
            vite 插件
            vite-plugin-find-image-duplicates，⽤于排查项⽬是否有重复图⽚。收录在
            vite 官⽅插件列表中。
            <div class="show-detail">
              <el-button size="large" type="success" round>查看</el-button>
            </div>
          </div>
        </el-collapse-item>

        <el-collapse-item name="3">
          <template #title>
            <el-icon class="header-icon" color="#66b1ff">
              <Drizzling />
            </el-icon>
            <span class="project-name">海尔小程序</span>
          </template>
          <div class="collapse-content">
            1、 海尔智家洗碗机
            该项目属于海尔智家app内嵌h5页面，主用于实时展示用户洗碗机的状态（开关机，当前运行程序，洗碗机童锁开关、运行阶段等），控制洗碗机（调用接口启动程序、开关机，调节参数等），主要用于国内和欧洲东南亚，支持中文和英文，国内日活5万。项目自2020年11月搭建维护至今。
            2、海尔智家洗衣机
            该项目属于海尔智家app内嵌h5页面，主用于实时展示用户洗衣机的状态（开关机，洗衣液余量、运行阶段、程序实际耗水耗电量、烘干都散），控制洗衣机（调用接口启动程序、洗衣液自动投放，调节参数等）。项目自2021年5月搭建维护至今，日活12万。
            3、海尔全球工厂设备生产管理系统
            系统用于录入设备生产工单，记录监控海尔全球各个工厂各批次设备的生产情况，可视化实时展示出来。系统支持中文，英文，阿拉伯语的切换。有总工厂负责人，x工厂负责人，x工厂xx批次负责人，xx批次各流程负责人。共4个角色，目前每日日活3万。目前在全球14个国家78个工厂使用。
            4、海尔智家微信小程序
            海尔智家小程序包括家电控制，活动，商城，个人中心四大模块，用户可以用来绑定家电、控制家电，购买海尔产品。
            5、npm组件库开发 ● 独⾃开发产业通⽤的 @wash/eslit-config的npm
            包，⽤于统⼀团队代码⻛格，提⾼代码质量，⽀持
            JavaScript、vue2、vue3、Prettier，开箱即⽤。 ●
            负责开发海尔洗涤产业公共api组件库npm包，实现按需引入。 ● 参与开发
            vite 插件
            vite-plugin-find-image-duplicates，⽤于排查项⽬是否有重复图⽚。收录在
            vite 官⽅插件列表中。
            <div class="show-detail">
              <el-button size="large" type="success" round>查看</el-button>
            </div>
          </div>
        </el-collapse-item>

        <el-collapse-item name="4">
          <template #title>
            <el-icon class="header-icon" color="#66b1ff">
              <Eleme />
            </el-icon>
            <span class="project-name">洗衣机</span>
          </template>
          <div class="collapse-content">
            1、 海尔智家洗碗机
            该项目属于海尔智家app内嵌h5页面，主用于实时展示用户洗碗机的状态（开关机，当前运行程序，洗碗机童锁开关、运行阶段等），控制洗碗机（调用接口启动程序、开关机，调节参数等），主要用于国内和欧洲东南亚，支持中文和英文，国内日活5万。项目自2020年11月搭建维护至今。
            2、海尔智家洗衣机
            该项目属于海尔智家app内嵌h5页面，主用于实时展示用户洗衣机的状态（开关机，洗衣液余量、运行阶段、程序实际耗水耗电量、烘干都散），控制洗衣机（调用接口启动程序、洗衣液自动投放，调节参数等）。项目自2021年5月搭建维护至今，日活12万。
            3、海尔全球工厂设备生产管理系统
            系统用于录入设备生产工单，记录监控海尔全球各个工厂各批次设备的生产情况，可视化实时展示出来。系统支持中文，英文，阿拉伯语的切换。有总工厂负责人，x工厂负责人，x工厂xx批次负责人，xx批次各流程负责人。共4个角色，目前每日日活3万。目前在全球14个国家78个工厂使用。
            4、海尔智家微信小程序
            海尔智家小程序包括家电控制，活动，商城，个人中心四大模块，用户可以用来绑定家电、控制家电，购买海尔产品。
            5、npm组件库开发 ● 独⾃开发产业通⽤的 @wash/eslit-config的npm
            包，⽤于统⼀团队代码⻛格，提⾼代码质量，⽀持
            JavaScript、vue2、vue3、Prettier，开箱即⽤。 ●
            负责开发海尔洗涤产业公共api组件库npm包，实现按需引入。 ● 参与开发
            vite 插件
            vite-plugin-find-image-duplicates，⽤于排查项⽬是否有重复图⽚。收录在
            vite 官⽅插件列表中。
            <div class="show-detail">
              <el-button size="large" type="success" round>查看</el-button>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import { Search, Eleme, Coin, Drizzling } from '@element-plus/icons-vue'
defineOptions({ name: 'Project' })

const isBrief = ref(false)

const activeIndex = ref('1')

const changeStyle = () => {
  console.log(isBrief)
}
</script>
<style scoped lang="less">
[data-theme='light']:root {
}
.My-project {
  position: relative;
  margin: 30px 20px;
  box-sizing: border-box;
  padding: 30px 20px;
  border-radius: 12px;
  background: var(--white-98);

  .title-box {
    color: var(--black);
    font-family: var(--header-font);
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .desc {
      color: var(--black-80);
      font-size: 13px;
    }
  }
  .project-collapse {
    margin-top: 30px;
    .header-icon {
      margin-left: 16px;
    }
    .project-name {
      color: var(--black);
      font-family: var(--header-font);
      font-size: 18px;
      margin-left: 8px;
    }
    .collapse-content {
      box-sizing: border-box;
      padding: 10px 30px;
      .show-detail {
        margin-top: 8px;
        display: flex;
        width: 100%;
        justify-content: end;
      }
    }
  }
}
</style>
