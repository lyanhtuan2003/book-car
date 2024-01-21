import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import { Space, Table, Tag } from 'antd';
import ButtonRadiusCompoennt from '~/app/component/parts/button/button.component'
import Column from 'antd/es/table/Column';
import ColumnGroup from 'antd/es/table/ColumnGroup';

const MainRightComponent = () => {
    const defaultDate = dayjs('2024-01-01')

    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const columns: any['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: any) => <a>{text}</a>,
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
            render: (_: any, { tags }: any) => (
                <>
                    {tags.map((tag: any) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
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
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (

        <div>
            <div className='flex justify-between '>
                <div>
                    <h2 className='font-medium text-[23px]'>Lịch sử mua vé</h2>
                    <div className='text-gray-500 mt-2 text-[13px] font-normal sm:text-[15px]'>
                        Theo dõi và quản lý quá trình lịch sử mua vé của bạn
                    </div>
                </div>

                <div>
                    <ButtonRadiusCompoennt content='Đặt vé' />
                </div>
            </div>

            <div className='flex justify-between'>
                <div>
                    <div className='mt-4 mb-2'>
                        Mã vé
                    </div>
                    <div>
                        <input type="text" className='border border-gray-400 px-4 py-2 rounded-lg w-[130px]' placeholder='Nhập mã vé' />
                    </div>
                </div>


                <div>
                    <div className='mt-4 mb-2'>
                        Thời gian
                    </div>
                    <div className='border border-gray-400 px-4 py-1 rounded-lg w-[130px]'>
                        <p className='input-search font-semibold '> <DatePicker
                            defaultValue={defaultDate}
                            suffixIcon={null}
                            style={{ border: 'none' }}
                        /></p>
                    </div>
                </div>


                <div>
                    <div className='mt-4 mb-2'>
                        Tuyến đường
                    </div>
                    <div>
                        <input type="text" className='border border-gray-400 px-4 py-2 rounded-lg w-[130px]' />
                    </div>
                </div>

                <div>
                    <div className='mt-4 mb-2'>
                        Tráng thái
                    </div>
                    <select name="" id="" className='w-[150px] border border-gray-400 rounded-lg  px-4 py-2'>
                        <option value="1">Huỷ</option>
                        <option value="2">Chờ thanh toán</option>
                        <option value="3">hết hạn</option>
                        <option value="4">Thành công</option>
                    </select>
                </div>

                <div className='mt-12'>
                    <ButtonRadiusCompoennt content='Tìm' />
                </div>
            </div>

            <div className='mt-4'>
                <Table columns={columns} dataSource={data} />;
            </div>

        </div>



    )
}

export default MainRightComponent