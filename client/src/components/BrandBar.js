import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{ width: 150, cursor: 'pointer' }}
                    key={brand.id}
                    className="p-3 mb-5"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});


export default BrandBar;