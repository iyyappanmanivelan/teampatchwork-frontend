import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import ElectricButton from "@/Animation/ElectricButton";

const ContactForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const projectOptions = [
        "Corporate Video",
        "Product Shoot",
        "Social Media Content",
        "Event Coverage",
        "Video Editing",
        "Other",
    ];

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Full Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            tempErrors.email = "Email is invalid";
        if (!formData.projectType) tempErrors.projectType = "Project Type is required";
        if (!formData.message) tempErrors.message = "Message is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Submitted:", formData);
            router.push("/thankyou");
        }
    };

    return (
        <section className={styles.formSection}>
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            <p className={styles.formSubtitle}>
                Fill out the form below and our team will get back to you as soon as
                possible.
            </p>

            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? styles.errorInput : ""}
                        placeholder="Enter your full name"
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? styles.errorInput : ""}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="projectType">Project Type</label>
                    <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={errors.projectType ? styles.errorInput : ""}
                    >
                        <option value="">Select Project Type</option>
                        {projectOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    {errors.projectType && (
                        <span className={styles.errorText}>{errors.projectType}</span>
                    )}
                </div>

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? styles.errorInput : ""}
                        placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && (
                        <span className={styles.errorText}>{errors.message}</span>
                    )}
                </div>

                <div className={styles.submitWrapper}>
                    <button type="submit" className={styles.submitBtn}>
                        SEND MESSAGE
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
