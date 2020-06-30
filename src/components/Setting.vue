<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>管理面板信息</span>
			</div>
			<el-collapse v-model="activeNames">
				<el-collapse-item title="管理员ID" name="0">
					<div>{{admin.id}}</div>
				</el-collapse-item>
				<el-collapse-item title="管理员名称" name="1">
					<div>{{admin.name}}</div>
				</el-collapse-item>
			</el-collapse>
		</el-card>
		<el-divider></el-divider>

		<el-row type="flex" justify="center">
			<el-col>
				<el-button-group>
					<el-button type="primary" v-on:click="dialogVisible = true">修改密码</el-button>
					<el-button type="warning" v-on:click="onLogout">退出登录</el-button>
					<el-button type="danger" v-on:click="onDelete">销毁账户</el-button>
				</el-button-group>
			</el-col>
		</el-row>

		<el-dialog title="请输入修改的密码" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<el-form ref="form" :model="setting" label-width="120px">
				<el-form-item label="旧密码">
					<el-input v-model="setting.old_passwd"></el-input>
				</el-form-item>
				<el-form-item label="新密码">
					<el-input v-model="setting.new_passwd"></el-input>
				</el-form-item>
				<el-form-item label="确认密码">
					<el-input v-model="setting.repeat_passwd"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onUpdate">更新</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				setting: {
					id: this.admin.id,
					name: this.admin.name,
					old_passwd: '',
					new_passwd: '',
					repeat_passwd: ''
				},
				dialogVisible: false
			}
		},
		props: {
			admin: Object
		},
		methods: {
			onUpdate: function() {
				this.$axios.post('update_admin', this.setting)
					.then(resp => {
						if (resp.data.id == null) {
							this.$message.error('修改失败');
						} else {
							this.$message.success('修改成功');
							setTimeout(function() {
								window.location.reload();
							}, 5 * 1000);
						}
					})
					.catch(error => {
						this.$message.error('修改失败');
					});
			},
			onLogout: function() {
				window.location.reload();
			},
			onDelete: function() {
				this.$axios.post('delete_admin', this.admin)
					.then(resp => {
						if (resp.data.id == null) {
							this.$message.error('删除失败');
						} else {
							this.$message.success('删除成功');
							setTimeout(function() {
								window.location.reload();
							}, 5 * 1000);
						}
					})
					.catch(error => {
						this.$message.error('删除失败');
					});
			}
		}
	}
</script>

<style>
</style>
