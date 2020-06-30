<template>
	<el-form ref="form" :model="form" label-width="120px">
		<el-form-item label="任务编号">
			<el-input v-model="form.mission"></el-input>
		</el-form-item>
		<el-form-item label="任务标题">
			<el-input v-model="form.title"></el-input>
		</el-form-item>
		<el-form-item label="任务描述">
			<el-input v-model="form.description"></el-input>
		</el-form-item>
		<el-form-item label="是否开启">
			<el-input-number v-model="form.isopen" :min="0" :max="1"></el-input-number>
		</el-form-item>
		<el-form-item label="是否特殊">
			<el-input-number v-model="form.isspecial" :min="0" :max="1"></el-input-number>
		</el-form-item>
		<el-form-item label="任务难度">
			<el-slider v-model="form.rank" show-input max=86400>
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
				this.$axios.post('update_rp', this.form)
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
				this.$axios.post('delete_rp', this.form)
					.then(resp => {
						this.info = resp.data;
						this.$message.success('删除成功');
						this.$emit('get-data', null);
					})
					.catch(function(error) {
						this.$message.error('删除失败，原因:', error);
						this.$emit('get-data', null);
					});
				this.$emit('get-data', null);
			}
		},
		mounted() {
			// this.form = this.formData;
			this.form = JSON.parse(JSON.stringify(this.formData));
		}
	}
</script>

<style>
</style>
