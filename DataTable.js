import  React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios' ;
import { fade, makeStyles, Theme, createStyles,withStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    head:{color:'white'},
})
export default function DataTable() {
    const classes = useStyles();
    const columns = [
        { field: 'cust_name', headerName: 'Customer Name', width: 180 },
        { field: 'custno', headerName: 'Customer #', width:135 },
        { field: 'id', headerName: 'Bill ID', width: 150  },
        { field: 'Invo_amt', headerName: 'Total Open Amount', width: 185 },
        { field: 'due_date', headerName: 'Due Date', width: 135 },
    ];
    const [datas,setData]=React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const getLatestJSPost =async () => {
        try {
        const API_URL =
        "http://localhost:8080/1828259/finalCall?";
        const response = await axios.get(API_URL);
        setData(response.data);
        setLoading(false);
        } catch (err) {
        console.error("Error: ", err);
        }
        }
        React.useEffect(()=>{getLatestJSPost();},[]);
        console.log(datas);


        if (isLoading) {
            return <div>Loading ...</div>;
        }
        const rows=[
            {"cust_name":datas[0].name_customer,"custno":datas[0].cust_number,"id":datas[0].invoice_id,"Invo_amt":datas[0].total_open_amount,"due_date":datas[0].due_in_date,},
            {"cust_name":datas[1].name_customer,"custno":datas[1].cust_number,"id":datas[1].invoice_id,"Invo_amt":datas[1].total_open_amount,"due_date":datas[1].due_in_date,},
            {"cust_name":datas[2].name_customer,"custno":datas[2].cust_number,"id":datas[2].invoice_id,"Invo_amt":datas[2].total_open_amount,"due_date":datas[2].due_in_date,},
            {"cust_name":datas[3].name_customer,"custno":datas[3].cust_number,"id":datas[3].invoice_id,"Invo_amt":datas[3].total_open_amount,"due_date":datas[3].due_in_date,},
            {"cust_name":datas[4].name_customer,"custno":datas[4].cust_number,"id":datas[4].invoice_id,"Invo_amt":datas[4].total_open_amount,"due_date":datas[4].due_in_date,},
            {"cust_name":datas[5].name_customer,"custno":datas[5].cust_number,"id":datas[5].invoice_id,"Invo_amt":datas[5].total_open_amount,"due_date":datas[5].due_in_date,},
            {"cust_name":datas[6].name_customer,"custno":datas[6].cust_number,"id":datas[6].invoice_id,"Invo_amt":datas[6].total_open_amount,"due_date":datas[6].due_in_date,},
            {"cust_name":datas[7].name_customer,"custno":datas[7].cust_number,"id":datas[7].invoice_id,"Invo_amt":datas[7].total_open_amount,"due_date":datas[7].due_in_date,},
            {"cust_name":datas[8].name_customer,"custno":datas[8].cust_number,"id":datas[8].invoice_id,"Invo_amt":datas[8].total_open_amount,"due_date":datas[8].due_in_date,},
            {"cust_name":datas[9].name_customer,"custno":datas[9].cust_number,"id":datas[9].invoice_id,"Invo_amt":datas[9].total_open_amount,"due_date":datas[9].due_in_date,},
            {"cust_name":datas[10].name_customer,"custno":datas[10].cust_number,"id":datas[10].invoice_id,"Invo_amt":datas[10].total_open_amount,"due_date":datas[10].due_in_date,},
            {"cust_name":datas[11].name_customer,"custno":datas[11].cust_number,"id":datas[11].invoice_id,"Invo_amt":datas[11].total_open_amount,"due_date":datas[11].due_in_date,},
            {"cust_name":datas[12].name_customer,"custno":datas[12].cust_number,"id":datas[12].invoice_id,"Invo_amt":datas[12].total_open_amount,"due_date":datas[12].due_in_date,},
            {"cust_name":datas[13].name_customer,"custno":datas[13].cust_number,"id":datas[13].invoice_id,"Invo_amt":datas[13].total_open_amount,"due_date":datas[13].due_in_date,},
            {"cust_name":datas[14].name_customer,"custno":datas[14].cust_number,"id":datas[14].invoice_id,"Invo_amt":datas[14].total_open_amount,"due_date":datas[14].due_in_date,},
            {"cust_name":datas[15].name_customer,"custno":datas[15].cust_number,"id":datas[15].invoice_id,"Invo_amt":datas[15].total_open_amount,"due_date":datas[15].due_in_date,},
            {"cust_name":datas[16].name_customer,"custno":datas[16].cust_number,"id":datas[16].invoice_id,"Invo_amt":datas[16].total_open_amount,"due_date":datas[16].due_in_date,},
            {"cust_name":datas[17].name_customer,"custno":datas[17].cust_number,"id":datas[17].invoice_id,"Invo_amt":datas[17].total_open_amount,"due_date":datas[17].due_in_date,},
            {"cust_name":datas[18].name_customer,"custno":datas[18].cust_number,"id":datas[18].invoice_id,"Invo_amt":datas[18].total_open_amount,"due_date":datas[18].due_in_date,},
            {"cust_name":datas[19].name_customer,"custno":datas[19].cust_number,"id":datas[19].invoice_id,"Invo_amt":datas[19].total_open_amount,"due_date":datas[19].due_in_date,},
            {"cust_name":datas[20].name_customer,"custno":datas[20].cust_number,"id":datas[20].invoice_id,"Invo_amt":datas[20].total_open_amount,"due_date":datas[20].due_in_date,},
            
        ];
        console.log(rows);
    return <div style={{position:'relative', height: 400, width: '100%' ,left:'0' ,clear:'both',top:'3rem'}}><DataGrid checkboxSelection rows={rows} columns={columns} pageSize={21}  className={classes.head} /></div>;
}