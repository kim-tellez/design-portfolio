import React from 'react';

export default function Navbar() {
    return (
        <footer className="page-footer pt-5 pb-5">
            <div className="container-fluid text-center">
                <h4 className="font-weight-bold footer">let's connect!</h4>
                <div className="row justify-content-center">
                    <a className='text-decoration-none' target="_blank" rel="noreferrer"  href='https://www.linkedin.com/in/kimberly-tellez/'>
                        <div className="pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                <path d="M44.625 17V34C44.625 39.868 39.868 44.625 34 44.625H17C11.132 44.625 6.375 39.868 6.375 34V17C6.375 11.132 11.132 6.375 17 6.375H34C39.868 6.375 44.625 11.132 44.625 17Z" stroke="#0B4957" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.875 36.125V28.6875V21.25" stroke="#0B4957" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M23.375 29.2188C23.375 21.25 36.125 21.25 36.125 29.2188V36.125M23.375 36.125V29.2188V36.125ZM23.375 21.25V29.2188V21.25Z" stroke="#0B4957" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.875 14.8963L14.8963 14.8727" stroke="#0B4957" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </a>

                    <a href="mailto:kimberlyntellez@gmail.com">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                                <path d="M44.625 17V34C44.625 39.868 39.868 44.625 34 44.625H17C11.132 44.625 6.375 39.868 6.375 34V17C6.375 11.132 11.132 6.375 17 6.375H34C39.868 6.375 44.625 11.132 44.625 17Z" stroke="#0B4957" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <line x1="7.86112" y1="40.0238" x2="19.8611" y2="26.0238" stroke="#0B4957" stroke-width="3"/>
                                <line x1="41.8549" y1="39.9689" x2="30.8549" y2="26.9689" stroke="#0B4957" stroke-width="3"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.51877 10C6.93326 11.5562 7.10164 13.4035 8.32575 14.907L21.6226 31.2379C23.6235 33.6953 27.3764 33.6953 29.3773 31.2379L42.6742 14.907C43.8983 13.4035 44.0666 11.5562 43.4811 10H39.775C40.7917 10.5689 41.1807 11.9898 40.3478 13.0128L27.0509 29.3438C26.2505 30.3267 24.7494 30.3267 23.949 29.3438L10.6521 13.0128C9.81923 11.9898 10.2082 10.5689 11.2249 10H7.51877Z" fill="#0B4957"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </footer>

    );
}