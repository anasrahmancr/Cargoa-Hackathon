import React from 'react'
import { useParams } from 'react-router-dom';   
import {Pending} from '../../../components/user/pending/Pending';
import {ActionRequired} from '../../../components/user/actionRequired/ActionRequired';
import {Complete} from '../../../components/user/complete/Complete';

const ViewData = () => {
    const { orderId } = useParams(); // Get the blog ID from the URL params
    const [order, setOrder] = useState(null);
    // const [loading, setLoading] = useState(true);
  
    useEffect(() => {

      const fetchData = async () => {
        try {
          // Fetch the blog details from your API using the blogId
          const response = await axios.get(`http://localhost:7000/api/user/viewData/${orderId}`);
          setOrder(response.data.order);
          console.log("order detail=",response.data.order);
        //   setLoading(false);
        } catch (error) {
          console.error('Error fetching blog details:', error);
        //   setLoading(false);
        }
      };
    
      fetchData(); // Call the async function immediately
    
    }, [orderId]);

    return (
        <div>
          {order && order.length > 0 ? (
            (() => {        
              if (!order.vendorOptions) {
                return <Pending />;
              } else if (order.vendorOptions && selectedSchedule) {
                return <Complete />;
              } else {
                return <ActionRequired />;
              }
            })()
          ) : null}
        </div>
      );
}

export default ViewData
