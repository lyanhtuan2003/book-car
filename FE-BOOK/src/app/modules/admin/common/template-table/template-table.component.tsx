import React, { useState } from 'react';
import { message, Popconfirm, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";

const TemplateTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const confirm = (e: any) => {
        console.log(e);
        message.success('Click on Yes');
    };

    const cancel = (e: any) => {
        console.log(e);
        message.error('Click on No');
    };
    const columns: ColumnsType<any> = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Thao tác',
            key: "action",
            render: (_, record: any) => {
                return (
                    <div className='flex'>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        ><button className='text-[23px] text-red-600'>
                                <MdDeleteForever />
                            </button>
                        </Popconfirm>

                        <div className='px-6'>
                            <button className='text-[23px] text-blue-600'>
                                <MdOutlineBrowserUpdated />
                            </button>
                        </div>
                    </div>
                )
            }
        },
    ];

    const data: any = [];
    for (let i = 0; i < 8; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }


    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    return (
        <div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    )
}

export default TemplateTable