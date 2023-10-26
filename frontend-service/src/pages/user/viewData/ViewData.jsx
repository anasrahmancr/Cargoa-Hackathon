import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pending } from '../../../components/user/pending/Pending';
import { ActionRequired } from '../../../components/user/actionRequired/ActionRequired';
import { Complete } from '../../../components/user/complete/Complete';
import axios from 'axios';

const ViewData = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [vendor, setVendor] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(orderId)
        const response = await axios.get(`http://localhost:7000/api/user/viewData/${orderId}`);
        setOrder(response.data.order);
        console.log("order in view data user", response.data.order);
        if(order){
          const response = await axios.get(`http://localhost:8080/api/vendor/getVendor/${order.vendorId}`);
          setVendor(response.data.vendor);
          console.log("order in view data username", response.data.vendor.vendorname);
        }
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchData();
  }, [orderId, vendor]);

  return (
    <div>
      {order ? (
        <div>
          {(() => {
            if (order.vendorOptions.length > 0 && order.selectedSchedule)  {
                return <Complete order={order} vendor={vendor} />;
            } else if (order.vendorOptions.length > 0) {
                return <ActionRequired order={order} vendor={vendor} />;
            } else {
              return <Pending order={order} vendor={vendor}/>;
            }
          })()}
        </div>
      ) : (
        <div>No Orders</div>
      )}
    </div>
  );
};

export default ViewData;

