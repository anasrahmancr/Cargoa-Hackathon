import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VendorPending } from '../../../components/vendor/pending/VendorPending';
import { VendorActionRequired } from '../../../components/vendor/actionRequired/VendorActionRequired';
import { VendorComplete } from '../../../components/vendor/complete/VendorComplete';
import axios from 'axios';

const ReviewData = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/user/viewData/${orderId}`);
        setOrder(response.data.order);
        if(order){
          const response = await axios.get(`http://localhost:5000/api/user/getUser/${order.userId}`);
          setUser(response.data.user);
          console.log("order in view data username", response.data.user.username);

        }
        console.log(response.data.order,"resdataordr");
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchData();
  }, [orderId, user]);
  
  return (
    <div>
      {order ? (
        <div>
          {(() => {
            if (order.vendorOptions.length > 0 && order.selectedSchedule) {
              return <VendorComplete order={order} user={user}/>;
            } else if (order.vendorOptions.length > 0) {
              return <VendorPending order={order} user={user}/>;
            } else {
              return <VendorActionRequired order={order} user={user}/>;
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
