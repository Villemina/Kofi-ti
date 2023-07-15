import React, { useState } from 'react';
import "./reservationBar.scss";
import Modal from "react-modal";
import ReservationForm from "./ReservationForm";

const ReservationBar = () => {
    const [visible, setVisible] = useState(false);

    const closeVisible = () => {
        setVisible(false);
    };

    return (
        <div className="reservation__bar-container">
            <button onClick={() => setVisible(true)} className="reservation-btn">
                Rezerwacje
            </button>
            <Modal
                isOpen={visible}
                onRequestClose={closeVisible}
                style={{
                    overlay: {
                        background: "#4D4861",
                        zIndex: 9999,
                    },
                    content: {
                        padding: 0,
                        inset: "3rem 10rem",

                    },
                }}
            >
                <ReservationForm />
            </Modal>
        </div>
    );
};

export default ReservationBar;
