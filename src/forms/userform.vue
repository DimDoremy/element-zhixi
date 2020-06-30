<template>
	<el-form ref="form" :model="form" label-width="120px">
		<el-form-item label="Openid">
			<el-input v-model="form.openid" disabled></el-input>
		</el-form-item>
		<el-form-item label="用户昵称">
			<el-input v-model="form.nickname"></el-input>
		</el-form-item>
		<el-form-item label="用户头像">
			<el-input v-model="form.avatarurl" disabled></el-input>
		</el-form-item>
		<el-form-item label="使用时间">
			<el-slider v-model="form.time" show-input max=31536000>
			</el-slider>
		</el-form-item>
		<el-form-item label="金币总数">
			<el-slider v-model="form.soul" show-input max=10000000>
			</el-slider>
		</el-form-item>
		<el-form-item label="剩余生命">
			<el-slider v-model="form.lifepoint" show-input>
			</el-slider>
		</el-form-item>
		<el-form-item label="现有经验">
			<el-slider v-model="form.experience" show-input max=10000000>
			</el-slider>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">更新</el-button>
			<el-button type="danger" @click="onDelete">删除</el-button>
			<el-button type="infor" @click="onCancal">取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {},
				info: ""
			};
		},
		props: {
			formData: Object
		},
		methods: {
			onSubmit: function() {
				console.log('on submit');
				this.$axios.post('updateuserdata', this.form)
					.then(resp => {
						this.info = resp.data;
						this.$message.success('更新成功');
						this.$emit('get-data', null);
					})
					.catch(function(error) {
						this.$message.error('更新失败，原因:', error);
						this.$emit('get-data', null);
					});
			},
			onCancal: function() {
				console.log('on cancal');
				this.$emit('get-data', null);
			},
			onDelete: function() {
				console.log('on delete');
				this.$axios.post('deleteuserdata', this.form)
					.then(resp => {
						this.info = resp.data;
						this.$message.success('删除成功');
						this.$emit('get-data', null);
					})
					.catch(function(error) {
						this.$message.error('删除失败，原因:', error);
						this.$emit('get-data', null);
					});
			}
		},
		mounted() {
			this.form = JSON.parse(JSON.stringify(this.formData));
		}
	}
</script>

<style>
</style>
