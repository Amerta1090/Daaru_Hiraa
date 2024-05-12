import { useState } from "react";
import Modal from "./Modal";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

type Props = {
    notifications: any;
    isModal: boolean;
    setIsModal: any;
};

const ModalNotify = (props: Props) => {
    const { notifications, isModal, setIsModal } = props;
    const [showMassage, setShowMassage] = useState(false);
    const [isClickCount, setIsClickCount] = useState(0);
    const [open, setOpen] = useState<any>();

    const handlerClick = () => {
        setIsClickCount((prevCount) => prevCount + 1);
        isClickCount % 2 === 0 ? setShowMassage(false) : setShowMassage(true);
    };

    return (
        <Modal
            show={isModal}
            onClose={() => {
                setIsModal(false);
            }}
            maxWidth="2xl"
        >
            <div className="w-full py-2 px-2">
                <h1 className="text-2xl font-semibold py-2 text-textPrimary">
                    Notifications
                </h1>
                <div className="overflow-y-scroll h-[35rem] bg-white rounded-lg">
                    {notifications.data.length === 0 && (
                        <div className="flex items-center justify-center h-full">
                            <p>Tidak ada notifikiasi</p>
                        </div>
                    )}
                    {notifications.data.map(
                        (notification: any, index: number) => (
                            <div key={index} className="grid">
                                <button
                                    className={`px-4 flex items-center justify-between h-14 hover:bg-gray-100 ${
                                        showMassage && notification.id === open
                                            ? "bg-gray-100"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        setOpen(notification.id);
                                        handlerClick();
                                    }}
                                >
                                    <span className="flex items-center gap-2">
                                        <EnvelopeIcon className="w-5" />
                                        <h2 className="text-lg font-semibold">
                                            {notification.title}
                                        </h2>
                                    </span>
                                    <small>{notification.date}</small>
                                </button>
                                {showMassage && notification.id === open && (
                                    <div className="bg-gray-100 w-full px-4 pb-5">
                                        <small>
                                            From:{" "}
                                            <span className="font-semibold">
                                                {notification.user.name}
                                            </span>
                                        </small>

                                        <p className="mt-2">
                                            {notification.content}
                                        </p>
                                        {notification.url && (
                                            <p>link : {notification.url}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ModalNotify;
