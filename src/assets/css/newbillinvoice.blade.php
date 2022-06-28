<!DOCTYPE html>
<html>
   <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <style>
         body,table {
         font-size: 14px;
         }
      </style>
   </head>
   <body>
      <table style="width: 100%; position:relative;">
         <tr>
            <td style="width: 10%; padding: 10px; vertical-align: top; color: #fff;" bgcolor="#f37425">
               <img src="{{URL::asset('/public/humsafar-logo.png')}}" width="250"> <strong>{{$data->vendor->name}}</strong>
               <br>
               <br> <span style="line-height: 2;">{{$data->vendor->company??null}} <br>
               powered by Samridhi<br>
               Highway Solutions Pvt Ltd
               </span>
               <br>
               <div style="background: #25bbec; line-height: 2; padding: 10px; text-align: center; margin-top: 250px;"> Plot B09, Office Number 310,
                  <br> ITL Tower, Netaji Subhash
                  <br> Palace, Delhi 110034
                  <br> 76450-76450
                  <br> Download App - Fuel Humsafar
                  <br> www.humsafarindia.com
                  <br> Info@humsafarindia.com 
               </div>
            </td>
            <td style="width: 90%; padding: 10px; vertical-align: top;">
               <h1 style="text-align: center; color:#f37425;">Retail Invoice</h1>
               <table style="width:100%">
                  <tr>
                     <td><strong>No.# </strong>{{$data->id}}</td>
                     <td align="center"><strong>TIN : {{$data->vendor->tin_no}}</strong></td>
                     <td align="right"><strong>Date: {{ Carbon\Carbon::today()->format('d-m-Y') }}</strong></td>
                  </tr>
                  <tr height="30"></tr>
               </table>
               <table style="width:100%">
                  <tr>
                     <td align="right">GST : {{$data->vendor->gst_no}}</td>
                  </tr>
                  <tr height="10"></tr>
               </table>
               <table style="width:100%">
                  <tr>
                     <td align="right">{{$data->vendor->phone}} | {{$data->vendor->email}}</td>
                  </tr>
                  <tr height="30"></tr>
               </table>
               <table style="width:100%">
                  <tr>
                     <td style="border-bottom: 5px solid #223660;"></td>
                  </tr>
               </table>
               <table style="width:100%">
                  <tr>
                     <td style="vertical-align: top;">Billed To:</td>
                     <td style="vertical-align: top;">
                        <strong style="color:#f37425; font-size:18px; ">{{$data->order_by_detail->name}}</strong><br>
                        {{$data->delivery_address_detail->address}}<br>
                        {{$data->order_by_detail->phone}} • {{$data->order_by_detail->email}}
                     </td>
                  </tr>
                  
               </table>

               <table style="width:100%;">
                  <tr>
                     <td style="height:20px;">

                     </td>
                  </tr>
               </table>

               <table style="width:100%;">
                  <tr>
                     <th style="text-align:left;">Description</th>
                     <th style="text-align:center;">QTY</th>
                     <th style="text-align:center;">RATE</th>
                     <th style="text-align:right;">AMOUNT</th>
                  </tr>
                  <tr>
                     <td style="text-align:left;">
                        @if(isset($data->driver_details->id)) 
                            <p>{{ucfirst($data->fuel_type)}}</p>
                            {{ $data->driver_details->vehicle_number }} 
                          @else 
                            <p>{{ucfirst($data->fuel_type)}}</p>
                          @endif
                     </td>
                     <td style="text-align:center;">
                        @if(null != $data->delivered_quantity) 
                          @php $quan = $data->delivered_quantity; @endphp
                        @else
                          @php $quan = $data->quantity; @endphp
                        @endif
                        {{$quan}}
                     </td>
                     <td style="text-align:center;">Rs. {{$data->price}}</td>
                     <td style="text-align:right;">Rs. {{$quan * $data->price}}</td>
                  </tr>
                  
               </table>

               <table style="width:100%;">
                  <tr>
                     <td style="height:20px;">

                     </td>
                  </tr>
               </table>
              
               <table style="width:100%" align="right">
                  <tr>
                     <th align="right">SUBTOTAL:</th>
                     <td align="right">Rs. {{$quan * $data->price}}</td>
                  </tr>
                  <tr>
                     <th align="right">Delivery Charge:</th>
                     <td align="right">Rs.{{$data->delivery_charge}}</td>
                  </tr>
                  <tr>
                     <th align="right">Total:</th>
                     <td align="right">Rs.{{($quan * $data->price) +$data->delivery_charge}}</td>
                  </tr>
                  <tr>
                     <td style="height:50px;">

                     </td>
                  </tr>
               </table>

               <table style="width:100%;">
                  <tr>
                     <td style="height:400px;">

                     </td>
                  </tr>
               </table>
               
               <table style="width:100%">
                  <tr>
                     <td style="border-bottom: 5px solid #223660;"></td>
                  </tr>
               </table>
               <table style="width:100%;">
                  <tr>
                     <td style="height:10px;">

                     </td>
                  </tr>
               </table>
               <table style="width:100%">
                  <tr>
                     <td style="text-align:center;"><img src="{{URL::asset('/public/h-bg.png')}}" style="width: 200px;"></td>
                  </tr>
                  
               </table>
            </td>
         </tr>
      </table>
   </body>
</html>