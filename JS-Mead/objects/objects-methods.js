let restaurant = {
  name: 'Bistro',
  guestCapacity: 70,
  guestCount: 0,
  checkAvailability: function(partySize) {
    //* With this you can access the properties of the object inside the function.
    // ! *this* references the object the method is defined on.
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function(partySize) {
    this.guestCount += partySize;
  },
  removeParty: function(partySize) {
    this.guestCount -= partySize;
  }
};

// let status = restaurant.checkAvailability(4);
// console.log(status);
restaurant.seatParty(68);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
