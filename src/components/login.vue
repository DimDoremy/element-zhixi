<template>
	<div>
		<el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box" v-if="isRegister == false">
			<h3 class="login-title">欢迎登录 只夕Admin</h3>
			<el-form-item label="账号" prop="name">
				<el-input type="text" placeholder="请输入账号" v-model="form.name" />
			</el-form-item>
			<el-form-item label="密码" prop="passwd">
				<el-input type="password" placeholder="请输入密码" v-model="form.passwd" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
				<el-button type="infor" v-on:click="isRegister = true">注册</el-button>
			</el-form-item>
		</el-form>

		<el-form ref="registerForm" :model="form" :rules="rules" label-width="80px" class="login-box" v-if="isRegister == true">
			<h3 class="login-title">注册 只夕Admin</h3>
			<el-form-item label="账号" prop="name">
				<el-input type="text" placeholder="请输入账号" v-model="form.name" />
			</el-form-item>
			<el-form-item label="密码" prop="passwd">
				<el-input type="password" placeholder="请输入密码" v-model="form.passwd" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" v-on:click="onResigter('registerForm')">注册</el-button>
				<el-button type="infor" v-on:click="isRegister = false">返回</el-button>
			</el-form-item>
		</el-form>

		<el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>请输入账号和密码</span>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dialogVisible = false">确定</el-button>
			</span>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					passwd: ''
				},
				isRegister: false,
				// 表单验证，需要在 el-form-item 元素中增加 prop 属性
				rules: {
					name: [{
						required: true,
						message: '账号不可为空',
						trigger: 'blur'
					}],
					passwd: [{
						required: true,
						message: '密码不可为空',
						trigger: 'blur'
					}]
				},

				// 对话框显示和隐藏
				dialogVisible: false
			}
		},
		methods: {
			onSubmit(formName) {
				// 为表单绑定验证功能
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$axios.post('login', this.form)
							.then(resp => {
								if (resp.data.id == null) {
									this.$message.error('登陆失败，原因:', error);
									this.$emit('get-data', null);
								} else {
									this.$message.success('登陆成功');
									this.$emit('get-data', resp);
								}
							})
							.catch(error => {
								this.$message.error('登陆失败，账号或密码错误');
								this.$emit('get-data', null);
							});
					} else {
						this.dialogVisible = true;
						return false;
					}
				});
			},
			onResigter(formName) {
				// 为表单绑定验证功能
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$axios.post('register', {
								id: this.$md5(this.form.name + 'zhixi'),
								name: this.form.name,
								passwd: this.form.passwd
							}).then(resp => {
								if (resp.data.id == null) {
									this.$message.error('注册失败');
									this.isRegister = false;
								} else {
									this.$message.success('注册成功');
									this.isRegister = false;
								}
							})
							.catch(error => {
								this.$message.error('注册失败');
								this.isRegister = false;
							});
					} else {
						this.dialogVisible = true;
						return false;
					}
				});
			}
		}
	}
</script>

<style scoped>
	.login-box {
		border: 1px solid #DCDFE6;
		width: 350px;
		margin: 180px auto;
		padding: 35px 35px 15px 35px;
		border-radius: 5px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		box-shadow: 0 0 25px #909399;
	}

	.login-title {
		text-align: center;
		margin: 0 auto 40px auto;
		color: #303133;
	}
</style>
