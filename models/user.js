const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    personalDetails: {
        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
        lastName: { type: String, required: true },
        confirmFirstName: { type: String, required: true },
        confirmMiddleName: { type: String, required: true },
        confirmLastName: { type: String, required: true },
        fatherFirstName: { type: String, required: true },
        fatherMiddleName: { type: String, required: true },
        fatherLastName: { type: String, required: true },
        confirmFatherFirstName: { type: String, required: true },
        confirmFatherMiddleName: { type: String, required: true },
        confirmFatherLastName: { type: String, required: true },
        motherFirstName: { type: String, required: true },
        motherMiddleName: { type: String, required: true },
        motherLastName: { type: String, required: true },
        confirmMotherFirstName: { type: String, required: true },
        confirmMotherMiddleName: { type: String, required: true },
        confirmMotherLastName: { type: String, required: true },
    },
    contactInformation: {
        mobile: { type: String, required: true },
        confirmMobile: { type: String, required: true },
        email: { type: String, required: true },
        confirmEmail: { type: String, required: true },
    },
    categoryGenderCommunity: {
        maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced'], required: true },
        category: { type: String, enum: ['General', 'OBC', 'SC', 'ST'], required: true },
        gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    },
    documents: {
        photo: { type: String, required: true },
        signature: { type: String, required: true },
        resume: { type: String, required: true },
    },
    contactDetails: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pin: { type: Number, required: true },
    },
    educationalQualifications: [{
        exam: { type: String, required: true },
        boardOrUniversity: { type: String, required: true },
        yearOfPassing: { type: Number, required: true },
        percentageOrGrade: { type: String, required: true },
        document: { type: String, required: true },
    }],
    experienceDetails: {
        teachingExperience: { type: Number, required: true },
        specialization: { type: String, required: true },
        previousEmployer: { type: String },
    },
    // Authentication fields
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true }, // For password confirmation
});

module.exports = mongoose.model('User', UserSchema, 'users'); // Changed collection name to 'users'
