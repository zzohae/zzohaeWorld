import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import { ReactComponent as MailIcon } from '../../assets/mail.svg'

export default function Contact({ id, className }) {
	
	const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
	const [isButtonActive, setIsButtonActive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState({});

	useEffect(() => {
    const allFilled = name.trim() && email.trim() && phone.trim() && message.trim();
    setIsButtonActive(allFilled);
  }, [name, email, phone, message]);

	// 유효성 검사사
	const validateForm = () => {
    let formErrors = {};
    
    // 이름: 한글 초성만 입력 불가
    const namePattern = /^[가-힣]{2,}$/;
    if (!namePattern.test(name)) {
      formErrors.name = "이름은 초성 없이 2글자 이상 입력해야 합니다.";
    }

    // 전화번호: 숫자만 11글자
    const phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
      formErrors.phone = "전화번호는 하이픈(-) 없이 숫자만 입력해주세요.";
    }

    // 문의 내용: 최소 10자 이상
    if (message.length < 10) {
      formErrors.message = "문의 내용은 최소 10자 이상이어야 합니다.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

		if (!validateForm()) return;

		setIsLoading(true);

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    try {
      const response = await fetch(process.env.REACT_APP_GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      alert("문의가 성공적으로 접수되었습니다. 확인 후 연락 드리겠습니다.");
    } catch (error) {
      alert("폼 제출 중 오류가 발생하였습니다. 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
    }
  };

	return (
		<div id={id} className={`contactCont container mycontainer d-flex flex-column ${className}`}>
			<Title page='main' noBtn={true}>Contact</Title>
			<div className="d-flex flex-column">
				<div className="align-self-md-end col-md-8 col-lg-6">
					<h6 className="fcs fs-18"><MailIcon />badahaeyeoncho@gmail.com</h6>
					<p>메일은 2~3일에 한 번 확인합니다.</p>
				</div>
				<form onSubmit={handleSubmit} className="d-flex flex-column align-self-md-end col-md-8 col-lg-6">
					<div className="smallCont">
						<label htmlFor="name">이 름</label>
						<div className="w-100 inputwrap">
							<input
								type="text"
								id="name"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="회사명/담당자명"
								required
							/>
							{errors.name && <p className="error mt-1">{errors.name}</p>}
						</div>
					</div>
					<div className="smallCont">
						<label htmlFor="email">이 메 일</label>
						<div className="w-100 inputwrap">
							<input
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="이메일"
								required
							/>
						</div>
					</div>
					<div className="smallCont">
						<label htmlFor="phone">연 락 처</label>
						<div className="w-100 inputwrap">
							<input
								type="text"
								id="phone"
								name="phone"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								placeholder="전화번호 숫자만"
								required
							/>
							{errors.phone && <p className="error mt-1">{errors.phone}</p>}
						</div>
					</div>
					<div className="smallCont">
						<label htmlFor="message">문 의 내 용</label>
						<div className="w-100 inputwrap">
							<textarea
								id="message"
								name="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="내용을 입력해 주세요."
								required
							></textarea>
							{errors.message && <p className="error">{errors.message}</p>}
						</div>
					</div>
					{isLoading ? (
            <div className="loading">
              보내는 중...
            </div>
          ) : (
            <button type="submit"
              className={`submit fcc ${ isButtonActive ? 'active' : ''}`}
              disabled={!isButtonActive}>보내기</button>
          )}
				</form>
			</div>
		</div>
	)
}