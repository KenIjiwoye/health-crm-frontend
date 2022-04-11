import React from 'react'

type InfoCardProps = {
    color: string;
    title: string;
    value: number;
}

export default function InfoCard({color, title, value}:InfoCardProps) {
    return (
        <div className="col-md-4">
            <div className={`widget-area proclinic-box-shadow color-${color}`}>
                <div className="widget-left">
                    <span className="ti-user"></span>
                </div>
                <div className="widget-right">
                    <h4 className="wiget-title">{title}</h4>
                    <span className="numeric color-red">{value}</span>
                    <p className="inc-dec mb-0"><span className="ti-angle-up"></span> +20% Increased</p>
                </div>
            </div>
        </div>
    )
}
