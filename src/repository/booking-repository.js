const { StatusCodes} = require('http-status-codes')

const { Booking } = require('../models/index');
const { AppError,ValidationError } = require('../utils/index');


class BookingRepository {
    async createBooking(data){
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                throw new ValidationError;
            }
            throw new AppError(
                'RepositoryError',
                'Cannot create booking',
                'There are some issues creating the booking please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
                );
        }
    }
    async updateBooking(bookingId,data){
        try {
            // const booking
        } catch (error) {
            
        }
    }
}


module.exports = BookingRepository;