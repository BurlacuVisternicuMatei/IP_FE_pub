import React, { useState } from "react";
import "../../styles/moderator.css";

export default function Moderator() {
    const [showStats, setShowStats] = useState(false);
    const [showWordList, setShowWordList] = useState(false);
    const [showStudentList, setShowStudentList] = useState(false);
    const [showTagRequests, setShowTagRequests] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const [newWord, setNewWord] = useState("");
    const [wordList, setWordList] = useState([]);
    const [newStudent, setNewStudent] = useState("");
    const [studentList, setStudentList] = useState([]);
    const [tagRequests, setTagRequests] = useState(["Tag request 1", "Tag request 2", "Tag request 3"]);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [disclaimer, setDisclaimer] = useState("");

    const toggleBox = (boxName) => {
        setShowStats(boxName === 'showStats' ? !showStats : false);
        setShowWordList(boxName === 'showWordList' ? !showWordList : false);
        setShowStudentList(boxName === 'showStudentList' ? !showStudentList : false);
        setShowTagRequests(boxName === 'showTagRequests' ? !showTagRequests : false);
        setShowSettings(boxName === 'showSettings' ? !showSettings : false);
        setShowLogout(boxName === 'showLogout' ? !showLogout : false);
    };

    const handleNewWordChange = (e) => {
        setNewWord(e.target.value);
    };

    const handleNewStudentChange = (e) => {
        setNewStudent(e.target.value);
    };

    const addNewWord = () => {
        if (newWord.trim() !== "") {
            setWordList([...wordList, newWord]);
            setNewWord("");
        }
    };

    const addNewStudent = () => {
        if (newStudent.trim() !== "") {
            setStudentList([...studentList, newStudent]);
            setNewStudent("");
        }
    };

    const removeWord = (index) => {
        const updatedWordList = [...wordList.slice(0, index), ...wordList.slice(index + 1)];
        setWordList(updatedWordList);
    };

    const removeStudent = (index) => {
        const updatedStudentList = [...studentList.slice(0, index), ...studentList.slice(index + 1)];
        setStudentList(updatedStudentList);
    };

    const approveTag = (index) => {
        const updatedTagRequests = [...tagRequests.slice(0, index), ...tagRequests.slice(index + 1)];
        setTagRequests(updatedTagRequests);
    };

    const disapproveTag = (index) => {
        const updatedTagRequests = tagRequests.filter((_, i) => i !== index);
        setTagRequests(updatedTagRequests);
    };

    const handleOldPasswordChange = (e) => {
        setOldPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const changePassword = () => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let disclaimerMessage = "";

        if (newPassword.trim() !== "") {
            if (!passwordRegex.test(newPassword)) {
                disclaimerMessage = "Password must be at least 8 characters long, contain a number, a special character, and an uppercase letter!";
            }
        }

        if (newPassword === confirmPassword && oldPassword.trim() !== "" && newPassword.trim() !== "") {
            if (disclaimerMessage === "") {
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
                setSuccessMessage("Password successfully changed!");
                setDisclaimer("");
            } else {
                setSuccessMessage("Passwords do not match or fields are empty.");
                setDisclaimer(disclaimerMessage);
            }
        } else {
            setSuccessMessage("Passwords do not match or fields are empty.");
            setDisclaimer(disclaimerMessage);
        }
    };

    return (
        <div className="main-container">
            <div className="navcontainer">
                <nav className="nav">
                    <div className="nav-upper-options">
                        <button className="nav-option" onClick={() => toggleBox('showStats')}>
                            <h3>Statistics</h3>
                        </button>
                        <button className="nav-option" onClick={() => toggleBox('showWordList')}>
                            <h3>Word Blacklist</h3>
                        </button>
                        <button className="nav-option" onClick={() => toggleBox('showStudentList')}>
                            <h3>Student Blacklist</h3>
                        </button>
                        <button className="nav-option" onClick={() => toggleBox('showTagRequests')}>
                            <h3>Tag Requests</h3>
                        </button>
                        <button className="nav-option" onClick={() => toggleBox('showSettings')}>
                            <h3>Settings</h3>
                        </button>
                        <button className="nav-option logout" onClick={() => toggleBox('showLogout')}>
                            <h3>Logout</h3>
                        </button>
                    </div>
                </nav>
            </div>
    
            <div className={`container ${showStats ? '' : 'hidden'}`} id="stats-container">
                <div className="container-title"></div>
                <div className="stats"></div>
            </div>
    
            <div className={`container ${showWordList ? '' : 'hidden'}`} id="word-container">
                <input
                    type="text"
                    id="new-word"
                    className="input"
                    placeholder="Add word"
                    value={newWord}
                    onChange={handleNewWordChange}
                />
                <button onClick={addNewWord}>+</button>
                <div className="word-list">
                    {wordList.map((word, index) => (
                        <div key={index} className="word-item">
                            <span>{word}</span>
                            <button onClick={() => removeWord(index)}>X</button>
                        </div>
                    ))}
                </div>
            </div>
    
            <div className={`container ${showStudentList ? '' : 'hidden'}`} id="student-container">
                <input
                    type="text"
                    id="new-student"
                    className="input"
                    placeholder="Add student"
                    value={newStudent}
                    onChange={handleNewStudentChange}
                />
                <button onClick={addNewStudent}>+</button>
                <div className="student-list">
                    {studentList.map((student, index) => (
                        <div key={index} className="student-item">
                            <span>{student}</span>
                            <button onClick={() => removeStudent(index)}>X</button>
                        </div>
                    ))}
                </div>
            </div>
    
            <div className={`container ${showTagRequests ? '' : 'hidden'}`} id="tag-container">
                <div className="tag-request">
                    {tagRequests.length > 0 ? (
                        tagRequests.map((request, index) => (
                            <div key={index} className="request-item">
                                <span>{request}</span>
                                <button onClick={() => approveTag(index)}>Approve</button>
                                <button onClick={() => disapproveTag(index)}>Disapprove</button>
                            </div>
                        ))
                    ) : (
                        <div>No tag requests</div>
                    )}
                </div>
            </div>
    
            <div className={`container ${showSettings ? '' : 'hidden'}`} id="settings-container">
                <div className="settings">
                    <input
                        type="password"
                        id="old-password"
                        className="input"
                        placeholder="Old Password"
                        value={oldPassword}
                        onChange={handleOldPasswordChange}
                    />
                    <input
                        type="password"
                        id="new-password"
                        className="input"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                    />
                    <input
                        type="password"
                        id="confirm-password"
                        className="input"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <button onClick={changePassword}>Change Account Password</button>
                    {successMessage && (
                        <div className="success-message">{successMessage}</div>
                    )}
                    {disclaimer && (
                        <div className="disclaimer">{disclaimer}</div>
                    )}
                </div>
            </div>
    
            <div className={`container ${showLogout ? '' : 'hidden'}`} id="logout-container">
                <div className="logout-container">
                    <h2>Are you sure you want to logout?</h2>
                    <p>Click the button below to confirm your logout.</p>
                    <button className="logout-button">Logout</button>
                </div>
            </div>
        </div>
    );
}
