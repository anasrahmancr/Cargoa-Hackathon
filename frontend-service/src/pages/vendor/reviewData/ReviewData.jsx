import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VendorPending } from '../../../components/vendor/pending/VendorPending';
import { VendorActionRequired } from '../../../components/vendor/actionRequired/VendorActionRequired';
import { VendorComplete } from '../../../components/vendor/complete/VendorComplete';
import axios from 'axios';

const ReviewData = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/user/viewData/${orderId}`);
        setOrder(response.data.order);
        console.log(response.data.order,"resdataordr");
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchData();
  }, [orderId]);

  return (
    <div>
      {order ? (
        <div>
          {(() => {
            if (order.vendorOptions.length > 0 && order.selectedSchedule) {
              return <VendorComplete order={order} />;
            } else if (order.vendorOptions.length > 0) {
              return <VendorPending order={order} />;
            } else {
              return <VendorActionRequired order={order} />;
            }
          })()}
        </div>
      ) : (
        <div>No Orders</div>
      )}
    </div>
  );
};

export default ReviewData;
