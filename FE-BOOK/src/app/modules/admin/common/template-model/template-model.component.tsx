import { Modal } from 'antd'
import { FunctionComponent, useState } from 'react'

interface TemplateModalProps {
    isModalOpen: boolean
    handleOk(): void
    handleCancel(): void
    children: any
}

const TemplateModal: FunctionComponent<TemplateModalProps> = ({ isModalOpen, handleOk, handleCancel, children }) => {
    return (
        <Modal title='Form edit' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {children}
        </Modal>
    )
}

export default TemplateModal