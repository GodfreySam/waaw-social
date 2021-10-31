// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../../context/AuthContext";
// import Avatar from "@material-ui/core/Avatar";

// import "./profile.css";

// const Profile = () => {
// 	const { user } = useContext(AuthContext);
// 	const [image, setImage] = useState(null);

// 	const uploadImage = async (e) => {
// 		e.preventDefault();
// 	};

// 	return (
// 		<div className="profile">
// 			<div className="profile__detailts">
// 				<Avatar
// 					className="share__profile__img"
// 					alt="User Image"
// 					src={user ? user.user.avatarSmall : ""}
// 				/>
// 				<form className="profile__image-form" onSubmit={uploadImage}>
// 					<label htmlFor="media" className="">
// 						<input
// 							style={{ display: "none" }}
// 							type="file"
// 							id="media"
// 							accept="image/*"
// 							onChange={(e) => setImage(e.target.file[0])}
// 						/>
// 					</label>
// 					<button className="profile__image-form__button" type="submit">
// 						Upload Image
// 					</button>
// 				</form>
// 				<p className="profile__user-fullname">John Doe</p>
// 				<p className="profile__username">@jayd</p>
// 			</div>
// <div className="profile__user__activity">
// 	<div className="users__followers__count">
// 		<p>100</p>
// 		<span>Followers</span>
// 	</div>
// 	<div className="users__following__count">
// 		<p>100</p>
// 		<span>Following</span>
// 	</div>
// 	<div className="users__post__count">
// 		<p>50</p>
// 		<span>Post</span>
// 	</div>
// </div>
// 		</div>
// 	);
// };

// export default Profile;

import React, { useContext, useState, useRef } from "react";
// import { AuthContext } from "../../context/AuthContext";
import AddIcon from "@material-ui/icons/Add";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import "./profile.css";
import MainWrapper from "../pages/mainWrapper/MainWrapper";
// import { Container, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
// 	container: {
// 		paddingTop: theme.spacing(5),
// 		paddingLeft: theme.spacing(0),
// 	},
// }));

const Profile = () => {
	// const { user } = useContext(AuthContext);
	// const post = useRef();
	const [profilePic, setProfilePic] = useState(null);
	const [bg, setBg] = useState(null);

	const submitBg = async (e) => {
		e.preventDefault();
		console.log(bg);
	};

	const submitPic = async (e) => {
		e.preventDefault();
		console.log(profilePic);
	};

	return (
		// <Container className={classes.container}>
			<MainWrapper>
				<div className="profile">
					<div className="profile__background">
						{bg && (
							<div className="profile__preview__container">
								<img
									className="profile__img__preview"
									src={URL.createObjectURL(bg)}
									alt=""
								/>
								{/* <span onClick={() => setImage(null)}>Clear</span> */}
								{/* <Cancel className="share__cancel" onClick={()=> setBg(null)}/> */}
							</div>
						)}
						<form className="profile__background__image" onSubmit={submitBg}>
							<div className="profile__options">
								<label htmlFor="background" className="profile__option">
									<AddIcon htmlColor="grey" className="profile__icon" />
									{/* <span className="share__text">Image</span> */}
									<input
										style={{ display: "none" }}
										type="file"
										id="background"
										accept="image/*"
										onChange={(e) => setBg(e.target.files[0])}
									/>
								</label>
							</div>

							<button type="submit" className="profile__button">
								Upload
							</button>
						</form>
					</div>
					<div className="profile__picture">
						<form onSubmit={submitPic}>
							<div className="display__picture">
								<div className="display__container">
									<label htmlFor="display" className="display__option">
										<AddAPhotoIcon htmlColor="grey" className="display__icon" />
										{/* <span className="share__text">Image</span> */}
										<input
											style={{ display: "none" }}
											type="file"
											id="display"
											accept="image/*"
											onChange={(e) => setProfilePic(e.target.files[0])}
										/>
									</label>
								</div>
							</div>
							<button type="submit" className="profile__button">
								Upload
							</button>
						</form>
					</div>
					<div className="profile__user__activity">
						<div className="users__followers__count">
							<p>100</p>
							<span>Followers</span>
						</div>
						<div className="users__following__count">
							<p>100</p>
							<span>Following</span>
						</div>
						<div className="users__post__count">
							<p>50</p>
							<span>Post</span>
						</div>
					</div>
				</div>
			</MainWrapper>
		// </Container>
	);
};

export default Profile;
