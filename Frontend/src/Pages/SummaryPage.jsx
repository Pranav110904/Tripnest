import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FlightBookingSummary = ({ bookingDetails = {
  flightNumber: '6E2279',
  flightName: 'IndiGo',
  passengerName: 'Pranav',
  departure: '0005',
  date: '04/10/2024',
  seat: '16 C',
  class: 'Economy',
  from: 'PNQ',
  to: 'DEL',
  total: 5202
}}) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">TRIPNEST</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500">
            <span>Booked</span>
            <Check className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">{bookingDetails.passengerName}</span>
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Summary Title */}
      <h1 className="text-4xl font-bold mb-8">Summary</h1>

      {/* Booking Details Card */}
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6" />
                <div>
                  <span className="font-bold">Flight Number: </span>
                  {bookingDetails.flightNumber}
                </div>
              </div>
              
              <div>
                <span className="font-bold">Flight Name: </span>
                {bookingDetails.flightName}
              </div>
              
              <div>
                <span className="font-bold">Passenger Name: </span>
                {bookingDetails.passengerName}
              </div>

              <div className="flex gap-8">
                <div>
                  <span className="font-bold">Departure: </span>
                  {bookingDetails.departure} hrs
                </div>
                <div>
                  <span className="font-bold">Date: </span>
                  {bookingDetails.date}
                </div>
              </div>

              <div className="flex gap-8">
                <div>
                  <span className="font-bold">Seat: </span>
                  {bookingDetails.seat}
                </div>
                <div>
                  <span className="font-bold">Class: </span>
                  {bookingDetails.class}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <span className="font-bold">From: </span>
                  {bookingDetails.from}
                </div>
                <div>
                  <span className="font-bold">To: </span>
                  {bookingDetails.to}
                </div>
              </div>
            </div>

            <div className="w-24 h-24">
              <img 
                src="/api/placeholder/96/96" 
                alt="Airline Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-2xl font-bold">₹{bookingDetails.total.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlightBookingSummary;