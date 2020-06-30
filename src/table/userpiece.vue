<template>
	<div>
		<el-table :data="info" border style="width: 100%" v-if="formData == null">
			<el-table-column prop="openid" label="Openid" align="center" sortable>
			</el-table-column>
			<el-table-column prop="xuanyuanjian" label="轩辕剑碎片" align="center" sortable>
			</el-table-column>
			<el-table-column prop="donghuangzhong" label="东皇钟碎片" align="center" sortable>
			</el-table-column>
			<el-table-column prop="pangufu" label="盘古斧碎片" align="center" sortable>
			</el-table-column>
			<el-table-column prop="lianyaohu" label="炼妖壶碎片" align="center" sortable>
			</el-table-column>
			<el-table-column prop="haotianta" label="昊天塔碎片" align="center" sortable>
			</el-table-column>
			<el-table-column prop="fuxiqin" label="伏羲琴碎片" align="center" sortable>
			</el-table-column>
			<el-table-column prop="shennongding" label="神农鼎碎片" align="center" sortable>
			</el-table-column>
			<el-table-column prop="kongtongyin" label="崆峒印碎片" align="center" sortable>
			</el-table-column>
			<el-table-column prop="kunlunjing" label="昆仑镜碎片" align="center" sortable>
			</el-table-column>
			<el-table-column prop="nvwashi" label="女娲石碎片" align="center" sortable>
			</el-table-column>
			<el-table-column align="center">
				<template scope="scope">
					<el-button v-on:click="change(scope.row)" type="primary">修改</el-button>
				</template>
			</el-table-column>
		</el-table>
		<Form @get-data="receive" :formData=formData v-if="formData != null" />
	</div>
</template>
<script>
	import Form from '../forms/pieceform.vue'
	export default {
		data() {
			return {
				info: null,
				formData: null
			};
		},
		components: {
			Form
		},
		methods: {
			change(value) {
				this.formData = value;
			},
			receive: function(value) {
				this.formData = value;
				this.$axios.get('alluserpiece')
					.then(resp => (this.info = resp.data))
					.catch(function(error) {
						console.log(error);
					});
			}
		},
		mounted() {
			this.$axios.get('alluserpiece')
				.then(resp => (this.info = resp.data))
				.catch(function(error) {
					console.log(error);
				});
		}
	}
</script>

<style>
</style>
