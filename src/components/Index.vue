<template>
	<el-container>
		<el-aside style='background-color: #545c64;'>
			<Aside @get-data="receive" />
		</el-aside>
		<el-container>
			<el-header>
				<h4 style="color: #98f2c3;">
					欢迎登陆，{{admin.name}}
				</h4>
			</el-header>
			<el-main>
				<Main v-if='router==0' />
				<Userdata v-if='router==1' />
				<Userpiece v-if='router==2' />
				<Handbook v-if='router==3' />
				<Recruit v-if='router==4' />
				<Setting :admin=admin v-if='router==5' />
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import Aside from './Aside.vue'
	import Main from './Main.vue'
	import Setting from './Setting.vue'
	import Userdata from '../table/userdata.vue'
	import Userpiece from '../table/userpiece.vue'
	import Handbook from '../table/handbook.vue'
	import Recruit from '../table/recruit.vue'
	export default {
		data() {
			return {
				router: 0
			};
		},
		components: {
			Aside,
			Main,
			Setting,
			Userdata,
			Userpiece,
			Handbook,
			Recruit
		},
		props: {
			admin: Object
		},
		methods: {
			receive: function(value) {
				this.router = value;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-header,
	.el-footer {
		background-color: #697580;
		color: #333;
		text-align: right;
		line-height: 60px;
	}
</style>
