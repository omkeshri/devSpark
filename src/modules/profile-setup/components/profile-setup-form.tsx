import CustomInput from "@/components/input";

const ProfileSetupForm = ({ profileSetupFormik, onChange, onBlur }: any) => {
    const employmentHistory: any = []
    return (
        <div className="min-h-screen flex justify-center items-start bg-background py-12 px-4">
            <div className="w-full max-w-3xl bg-card shadow-card rounded-[var(--radius)] p-8 border border-border">
                <h2 className="text-3xl font-bold text-gradient-primary mb-6 text-center">
                    Profile Setup
                </h2>
                <form className="flex flex-col gap-6">
                    {/* Photo URL */}
                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-muted-foreground">Photo URL</label>
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    {/* Age and Gender */}
                    <div className="flex gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <CustomInput
                                value={profileSetupFormik.values.age}
                                type="text"
                                placeholder="Age"
                                label="Age"
                                // onChange={(e: any) => onChange('age', e.target.value)}
                                // onBlur={() => onBlur('age')}
                                error={profileSetupFormik.touched?.age && !!profileSetupFormik.errors?.age}
                                errorMessage={profileSetupFormik.errors?.age}
                                required
                                name="age"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="font-medium text-muted-foreground">Gender</label>
                            <select className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none">
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-muted-foreground">Skills</label>
                        <input
                            type="text"
                            placeholder="Enter skills (comma separated)"
                            className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    {/* About */}
                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-muted-foreground">About</label>
                        <textarea
                            placeholder="Write something about yourself"
                            rows={3}
                            className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    {/* Experience, Company, Role */}
                    <div className="flex gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <CustomInput
                                value={profileSetupFormik.values.experience}
                                type="text"
                                placeholder="Experience"
                                label="Experience"
                                // onChange={(e: any) => onChange('experience', e.target.value)}
                                // onBlur={() => onBlur('experience')}
                                error={profileSetupFormik.touched?.experience && !!profileSetupFormik.errors?.experience}
                                errorMessage={profileSetupFormik.errors?.experience}
                                required
                                name="experience"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <CustomInput
                                value={profileSetupFormik.values.company}
                                type="text"
                                placeholder="Enter current company"
                                label="Current Company"
                                // onChange={(e: any) => onChange('company', e.target.value)}
                                // onBlur={() => onBlur('company')}
                                error={profileSetupFormik.touched?.company && !!profileSetupFormik.errors?.company}
                                errorMessage={profileSetupFormik.errors?.company}
                                required
                                name="company"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="font-medium text-muted-foreground">Role</label>
                            <input
                                type="text"
                                placeholder="Role"
                                className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                    </div>

                    {/* Current Location & Hashtag */}
                    <div className="flex gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="font-medium text-muted-foreground">Current Location</label>
                            <input
                                type="text"
                                placeholder="Location"
                                className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="font-medium text-muted-foreground">Hashtag</label>
                            <input
                                type="text"
                                placeholder="#developer"
                                className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-muted-foreground">Social Media</label>
                        <input
                            type="text"
                            placeholder="LinkedIn, GitHub, etc."
                            className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>

                    {/* Previous Companies */}
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-muted-foreground">Previous Companies</label>
                        {employmentHistory.map((emp: any, i: number) => (
                            <div
                                key={i}
                                className="flex flex-col gap-2 p-4 border border-border rounded-lg bg-muted/50"
                            >
                                <input
                                    type="text"
                                    placeholder="Company"
                                    value={emp.company}
                                    // onChange={(e) => handleEmploymentChange(i, "company", e.target.value)}
                                    className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Role"
                                    value={emp.role}
                                    // onChange={(e) => handleEmploymentChange(i, "role", e.target.value)}
                                    className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Duration"
                                    value={emp.duration}
                                    // onChange={(e) => handleEmploymentChange(i, "duration", e.target.value)}
                                    className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                                />
                                <textarea
                                    placeholder="Description"
                                    rows={2}
                                    value={emp.description}
                                    // onChange={(e) => handleEmploymentChange(i, "description", e.target.value)}
                                    className="border border-input rounded-lg px-4 py-2 bg-popover focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            // onClick={addEmployment}
                            className="mt-2 px-4 py-2 rounded-lg bg-gradient-primary text-white font-medium shadow-glow"
                        >
                            Add Another Company
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-4 px-6 py-3 rounded-lg bg-gradient-primary text-white font-semibold shadow-glow"
                    >
                        Save Profile
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProfileSetupForm;

/*
Photo
Age
Gender
Skills
About
Experience
Current Company
Role
Current location
Hashtag
social media
Previous Companies - role, duration, description, company
 */