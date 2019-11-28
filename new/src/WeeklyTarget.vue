<template>
  <!-- 如何获取iview中的checkbox组件的值？ done -->
  <div class="weekly-container">
    <div class="left">
      <img
        src="../src/assets/finalTarget.jpg"
        @click="change(flag)"
        :class="flag ? 'big' : 'pic'"
      />
    </div>
    <div class="split"></div>
    <div class="right"> 
      <!-- 能不能通过v-for渲染出来？ 可以但没必要。 done -->
      <div class="moduels">
        <div>一、JavaScript基础</div>
        <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
        <div class="bar">
          <!-- 进度条 -->
          <Progress :percent="addJs()" style="width:200px" />
        </div>
        <div>
          <!-- 定义数组 选中则添加进数组 取消选中移出数组 通过数组长度确定进度的增减(总长度已知) -->
          <CheckboxGroup v-model="js" @on-change="addJs">
            <Checkbox label="twitter">
              <Icon type="logo-twitter"></Icon>
              <span>变量和类型</span>
            </Checkbox>
            <Checkbox label="facebook">
              <Icon type="logo-facebook"></Icon>
              <span>原型和原型链</span>
            </Checkbox>
            <Checkbox label="github">
              <Icon type="logo-github"></Icon>
              <span>作用域和闭包</span>
            </Checkbox>
            <Checkbox label="snapchat">
              <Icon type="logo-snapchat"></Icon>
              <span>执行机制</span>
            </Checkbox>
            <Checkbox label="ssss">
              <Icon type="logo-snapchat"></Icon>
              <span>语法和API</span>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div class="moduels">
        <div>二、Html和Css</div>
        <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
        <div class="bar">
          <!-- 进度条 -->
          <Progress :percent="addHc()" style="width:200px" />
        </div>
        <div>
          <!-- 定义数组 选中则添加进数组 取消选中移出数组 通过数组长度确定进度的增减(总长度已知) -->
          <CheckboxGroup v-model="htmlCss" @on-change="addHc">
            <Checkbox label="twitter">
              <Icon type="logo-twitter"></Icon>
              <span>HTML</span>
            </Checkbox>
            <Checkbox label="facebook">
              <Icon type="logo-facebook"></Icon>
              <span>CSS</span>
            </Checkbox>
            <Checkbox label="github">
              <Icon type="logo-github"></Icon>
              <span>手写</span>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div class="moduels">
        <div>三、计算机基础</div>
        <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
        <div class="bar">
          <!-- 进度条 -->
          <Progress :percent="addBase()" style="width:200px" />
        </div>
        <div>
          <!-- 定义数组 选中则添加进数组 取消选中移出数组 通过数组长度确定进度的增减(总长度已知) -->
          <CheckboxGroup v-model="base" @on-change="addBase">
            <Checkbox label="twitter">
              <Icon type="logo-twitter"></Icon>
              <span>编译原理</span>
            </Checkbox>
            <Checkbox label="facebook">
              <Icon type="logo-facebook"></Icon>
              <span>网络协议</span>
            </Checkbox>
            <Checkbox label="github">
              <Icon type="logo-github"></Icon>
              <span>设计模式</span>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div class="moduels">
        <div>四、数据结构和算法</div>
        <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
        <div class="bar">
          <!-- 进度条 -->
          <Progress :percent="addData()" style="width:200px" />
        </div>
        <div>
          <!-- 定义数组 选中则添加进数组 取消选中移出数组 通过数组长度确定进度的增减(总长度已知) -->
          <CheckboxGroup v-model="datas" @on-change="addData">
            <Checkbox label="twitter">
              <Icon type="logo-twitter"></Icon>
              <span>JavaScript编码能力</span>
            </Checkbox>
            <Checkbox label="facebook">
              <Icon type="logo-facebook"></Icon>
              <span>手动实现前端轮子</span>
            </Checkbox>
            <Checkbox label="github">
              <Icon type="logo-github"></Icon>
              <span>数据结构</span> </Checkbox
            ><Checkbox label="githuwb">
              <Icon type="logo-github"></Icon>
              <span>算法</span>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div class="moduels">
        <div>五、运行环境</div>
        <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
        <div class="bar">
          <!-- 进度条 -->
          <Progress :percent="addOpEnvironment()" style="width:200px" />
        </div>
        <div>
          <!-- 定义数组 选中则添加进数组 取消选中移出数组 通过数组长度确定进度的增减(总长度已知) -->
          <CheckboxGroup v-model="opEnvironment" @on-change="addOpEnvironment">
            <Checkbox label="twitter">
              <Icon type="logo-twitter"></Icon>
              <span>浏览器API</span>
            </Checkbox>
            <Checkbox label="facebook">
              <Icon type="logo-facebook"></Icon>
              <span>浏览器原理</span>
            </Checkbox>
            <Checkbox label="github">
              <Icon type="logo-github"></Icon>
              <span>Node</span>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div class="moduels">
        <div>六、框架和类库</div>
        <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
        <div class="bar">
          <!-- 进度条 -->
          <Progress :percent="addFrame()" style="width:200px" />
        </div>
        <div>
          <!-- 定义数组 选中则添加进数组 取消选中移出数组 通过数组长度确定进度的增减(总长度已知) -->
          <CheckboxGroup v-model="frame" @on-change="addFrame">
            <Checkbox label="twitter">
              <Icon type="logo-twitter"></Icon>
              <span>TypeScript</span>
            </Checkbox>
            <Checkbox label="facebook">
              <Icon type="logo-facebook"></Icon>
              <span>React</span>
            </Checkbox>
            <Checkbox label="github">
              <Icon type="logo-github"></Icon>
              <span>Vue</span> </Checkbox
            ><Checkbox label="githubw">
              <Icon type="logo-github"></Icon>
              <span>多端开发</span> </Checkbox
            ><Checkbox label="githuwwb">
              <Icon type="logo-github"></Icon>
              <span>数据流管理</span> </Checkbox
            ><Checkbox label="gith1ub">
              <Icon type="logo-github"></Icon>
              <span>实用库</span> </Checkbox
            ><Checkbox label="git3hub">
              <Icon type="logo-github"></Icon>
              <span></span>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div class="moduels">
        <div>七、前端工程</div>
        <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
        <div class="bar">
          <!-- 进度条 -->
          <Progress :percent="addProject()" style="width:200px" />
        </div>
        <div>
          <!-- 定义数组 选中则添加进数组 取消选中移出数组 通过数组长度确定进度的增减(总长度已知) -->
          <CheckboxGroup v-model="project" @on-change="addProject">
            <Checkbox label="twitter">
              <Icon type="logo-twitter"></Icon>
              <span>项目构造</span>
            </Checkbox>
            <Checkbox label="facebook">
              <Icon type="logo-facebook"></Icon>
              <span>nginx</span>
            </Checkbox>
            <Checkbox label="github">
              <Icon type="logo-github"></Icon>
              <span>开发提速</span> </Checkbox
            ><Checkbox label="git3hub">
              <Icon type="logo-github"></Icon>
              <span>持续集成</span> </Checkbox
            ><Checkbox label="githu3b">
              <Icon type="logo-github"></Icon>
              <span>版本控制</span>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div class="moduels">
        <div>八、项目和业务</div>
        <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
        <div class="bar">
          <!-- 进度条 -->
          <Progress :percent="addBusiness()" style="width:200px" />
        </div>
        <div>
          <!-- 定义数组 选中则添加进数组 取消选中移出数组 通过数组长度确定进度的增减(总长度已知) -->
          <CheckboxGroup v-model="business" @on-change="addBusiness">
            <Checkbox label="twitter">
              <Icon type="logo-twitter"></Icon>
              <span>后端技能</span>
            </Checkbox>
            <Checkbox label="facebook">
              <Icon type="logo-facebook"></Icon>
              <span>性能优化</span>
            </Checkbox>
            <Checkbox label="github">
              <Icon type="logo-github"></Icon>
              <span>前端安全</span> </Checkbox
            ><Checkbox label="github323">
              <Icon type="logo-github"></Icon>
              <span>业务相关</span>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div class="moduels">
        <div>九、学习提升</div>
        <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
        <div class="bar">
          <!-- 进度条 -->
          <Progress :percent="addUp()" style="width:200px" />
        </div>
        <div>
          <!-- 定义数组 选中则添加进数组 取消选中移出数组 通过数组长度确定进度的增减(总长度已知) -->
          <CheckboxGroup v-model="up" @on-change="addUp">
            <Checkbox label="twitter">
              <Icon type="logo-twitter"></Icon>
              <span>自行摸索</span>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div class="moduels">
        <div>十、技术之外</div>
        <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
        <div class="bar">
          <!-- 进度条 -->
          <Progress :percent="addOther()" style="width:200px" />
        </div>
        <div>
          <!-- 定义数组 选中则添加进数组 取消选中移出数组 通过数组长度确定进度的增减(总长度已知) -->
          <CheckboxGroup v-model="other" @on-change="addOther">
            <Checkbox label="twitter">
              <Icon type="logo-twitter"></Icon>
              <span>自行摸索</span>
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //切换图片大小
      flag: false,
      //进度条
      percent: 0,
      //checkbox状态
      js: [],
      htmlCss: [],
      base: [],
      datas: [],
      opEnvironment: [],
      frame: [],
      project: [],
      business: [],
      up: [],
      other: []
    }
  },
  methods: {
    // 改变图示大小c
    change() {
      this.flag = !this.flag
      return this.flag
    },

    addJs() {
      let lon = this.js.length
      let flon = 5
      let percent = (lon / flon).toFixed(4) * 100
      return percent
    },
    addHc() {
      let lon = this.htmlCss.length
      let flon = 3
      let percent = (lon / flon).toFixed(4) * 100
      return percent
    },
    addBase() {
      let lon = this.base.length
      let flon = 3
      let percent = (lon / flon).toFixed(4) * 100
      return percent
    },
    addData() {
      let lon = this.datas.length
      let flon = 4
      let percent = (lon / flon).toFixed(4) * 100
      return percent
    },
    addOpEnvironment() {
      let lon = this.opEnvironment.length
      let flon = 3
      let percent = (lon / flon).toFixed(4) * 100
      return percent
    },
    addFrame() {
      let lon = this.frame.length
      let flon = 7
      let percent = (lon / flon).toFixed(4) * 100
      return percent
    },
    addProject() {
      let lon = this.project.length
      let flon = 5
      let percent = (lon / flon).toFixed(4) * 100
      return percent
    },
    addBusiness() {
      let lon = this.business.length
      let flon = 4
      let percent = (lon / flon).toFixed(4) * 100
      return percent
    },
    addUp() {
      let lon = this.up.length
      let flon = 1
      let percent = (lon / flon).toFixed(4) * 100
      return percent
    },
    addOther() {
      let lon = this.other.length
      let flon = 1
      let percent = (lon / flon).toFixed(4) * 100
      return percent
    }
  }
}
</script>
<style scoped>
.weekly-container {
  width: 800px;
  height: 600px;
  display: flex;
}
.left {
  width: 400px;
  height: 600px;
  z-index: 999;
}
.right {
  z-index: 1;
}
img {
  width: 300px;
  height: 200px;
  /* 控制缩放所用时长 */
  transition: all 0.2s linear;
}
.pic {
  /* 控制缩放锚点位置 */
  transform-origin: 0% 0% 0;
  /* 控制缩放大小 */
  transform: scale(1);
}
.big {
  transform-origin: 0% 0% 0;
  transform: scale(3);
}

.split {
  height: 200%;
  width: 2px;
  background-color: #000;
}
</style>
