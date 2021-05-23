// import React,{ useState } from 'react'
// import useSearch from './useSearch'
// export default function SimpleInfinite() {

//     const [textTyped, setText] = useState('')
//     const [pageNumber, setPageNumber] = useState(1)

//     function handleSearch(e) {
//         setText(e.target.value)
//         setPageNumber(1)
//     }

//     const {
//         invoice,
//         error,
//         loading,
//         hasMore
//     }=useSearch(textTyped,pageNumber)

   


//     return (
//         <>
//             <input type="text" onChange={handleSearch}></input>
//             <div>Check out----https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components</div>
//             {/* {invoice.map(inv=>{
//                 return <div>{invoice}</div>
//             })} */}
//             {/* invoice.forEach((item, index) => {
//             <div>
//                 <tr>
//                     <td>{item.invoice_id}</td>
//                     <td>{item.name_customer}</td>
//                     <td>{item.cust_number}</td>
//                     <td>{item.total_open_amount}</td>
//                     <td>{item.due_in_date}</td>
//             </tr></div>} */}
//             <button onClick={oneFun}>click</button>
              
//             <div>{loading && 'Loading.....'}</div>
//             <div>{error && 'ERROR.....'}</div>

//         </>
//     )
// }
