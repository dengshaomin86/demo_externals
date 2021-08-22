<template>
  <div>
    <h1>antd</h1>
    <h1>button</h1>
    <div>
      <a-button type="primary" shape="circle" icon="search" />
      <a-button type="primary" shape="circle">
        A
      </a-button>
      <a-button type="primary" icon="search">
        Search
      </a-button>
      <a-button shape="circle" icon="search" />
      <a-button icon="search">
        Search
      </a-button>
      <a-button shape="circle" icon="search" />
      <a-button icon="search">
        Search
      </a-button>
      <a-button type="dashed" shape="circle" icon="search" />
      <a-button type="dashed" icon="search">
        Search
      </a-button>
    </div>

    <h1>select</h1>
    <div>
      <a-select default-value="lucy" style="width: 120px">
        <a-select-option value="jack">
          Jack
        </a-select-option>
        <a-select-option value="lucy">
          Lucy
        </a-select-option>
        <a-select-option value="disabled" disabled>
          Disabled
        </a-select-option>
        <a-select-option value="Yiminghe">
          yiminghe
        </a-select-option>
      </a-select>
    </div>

    <h1>datePicker</h1>
    <div>
      <a-date-picker @change="onChange" />
      <br />
      <a-month-picker placeholder="Select month" @change="onChange" />
      <br />
      <a-range-picker @change="onChange" />
      <br />
      <a-week-picker placeholder="Select week" @change="onChange" />
    </div>

    <h1>form</h1>
    <div>
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="Note">
          <a-input v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </a-form-item>
        <a-form-item label="Gender">
          <a-select
            v-decorator="['gender', { rules: [{ required: true, message: 'Please select your gender!' }] }]"
            placeholder="Select a option and change input text above"
          >
            <a-select-option value="male">
              male
            </a-select-option>
            <a-select-option value="female">
              female
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </div>

    <h1>table</h1>
    <div>
      <a-table :columns="tableColumns" :data-source="tableData">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'antd',
  computed: {
    tableColumns() {
      return [
        {
          dataIndex: 'name',
          key: 'name',
          slots: { title: 'customTitle' },
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          scopedSlots: { customRender: 'tags' },
        },
        {
          title: 'Action',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ];
    },
    tableData() {
      return [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
    },
  },
  mounted() {
    // moment.locale('zh-cn');
    console.dir(moment);
    console.dir(moment.locale());
  },
  methods: {
    onChange() {},
  },
};
</script>

<style></style>
