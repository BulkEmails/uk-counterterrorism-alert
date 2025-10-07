document.addEventListener("DOMContentLoaded", function () {
    const sendEmailButton = document.getElementById('sendEmailButton');
    const emailTextArea = document.getElementById('emailText');

    // Load congressmen data
    fetch('congressmen.json')
        .then(response => response.json())
        .then(data => {
            const congressmen = data.congressmen;

            // Default email body
            const defaultEmailBody = `Dear Sir/Madam,

I am writing to bring to your urgent attention a grave incident involving the promotion and facilitation of terrorism through a social media platform accessible from within the United Kingdom.

Summary of the Incident
On October 6, 2025, Mr. Adil Raja, a Pakistani national reportedly residing in the United Kingdom, hosted and co-introduced a live audio discussion (“X Space”) on the platform X (formerly Twitter) featuring Mr. Ehsanullah Ehsan, the former spokesperson for Tehrik-i-Taliban Pakistan (TTP) — a UN-designated terrorist organization responsible for mass-casualty attacks in Pakistan and Afghanistan.

During this live session, Ehsanullah Ehsan was introduced by Mr. Raja as a “special guest.” The discussion included glorification of extremist violence and justification of terrorist activities under the guise of “jihad.” Multiple participants, including prominent supporters of the political party Pakistan Tehreek-e-Insaf (PTI), amplified and endorsed these statements in real time to an international audience.

This event was publicly promoted in advance and followed by wide circulation of screenshots, recordings, and related commentary across X (Twitter), effectively granting a global platform to a proscribed terrorist figure through a UK-based host.

Background on Ehsanullah Ehsan
Ehsanullah Ehsan is an internationally recognized terrorist operative who served as spokesperson for TTP (2009–2017) and its splinter faction Jamaat-ul-Ahrar. In numerous confessions and public admissions, he has claimed responsibility for orchestrating or endorsing some of the most horrific terrorist attacks in Pakistan’s history, including:
• Attack on Malala Yousafzai (2012) – claimed by TTP.
• Army Public School Massacre, Peshawar (2014) – 149 killed, including 132 children.
• Wagah Border Bombing (2014) – over 60 killed.
• Lahore Gulshan-e-Iqbal Park Easter Bombing (2016) – more than 70 killed, including 29 children, and 300 injured.
• Assassination of Col. Shuja Khanzada (2015) and several suicide bombings across Pakistan’s tribal regions.

These atrocities, including the Easter bombing targeting Christians, amount to crimes against humanity. Ehsan’s self-admitted involvement in these acts has been widely reported and verified by global media and UN-linked documentation.

Concerns and Potential Legal Breaches
The live platforming of a UN-designated terrorist by a UK-based individual constitutes a direct breach of UK counter-terrorism laws and international obligations, including but not limited to:
• Terrorism Act 2000 & 2006 – Prohibiting the invitation, encouragement, or glorification of terrorism and dissemination of terrorist content.
• Online Safety Act 2023 – Imposing obligations on users and platforms to prevent and remove terrorist material.
• UN Security Council Resolutions 1267 & 1373 – Requiring all member states to suppress propaganda and support for proscribed individuals or entities.

The act of providing an open forum for a terrorist to justify violence and promote extremist narratives represents a serious threat to public safety and undermines global counter-terrorism efforts. It also risks radicalizing diaspora audiences within the UK.

Requested Actions
In light of the above, I respectfully urge the Home Office and Counter Terrorism Policing to:
1. Investigate the conduct of Mr. Adil Raja for potential violations under the Terrorism Act and related legislation.
2. Engage with X (Twitter) to ensure permanent removal of any recordings, accounts, or promotional material linked to this event.
3. Coordinate with relevant international partners, including Interpol and Pakistani authorities, for intelligence-sharing and potential extradition inquiries.
4. Issue public guidance to ensure that UK-based individuals are not used, knowingly or unknowingly, as enablers of extremist propaganda.

This report is submitted in good faith, solely to safeguard public security and uphold the integrity of the United Kingdom’s counter-terrorism framework. Evidence (including post IDs and timestamps) can be furnished upon request.

I trust this matter will receive your immediate attention and appropriate action.

Yours faithfully,
`;

            // ✅ Use .value for textarea instead of .textContent
            emailTextArea.value = defaultEmailBody;

            // Combine all emails into one string
            const allEmailAddresses = congressmen.map(c => c.email).join(',');

            // Handle button click
            sendEmailButton.addEventListener("click", function () {
                const mailtoLink = `mailto:${allEmailAddresses}?subject=${encodeURIComponent('Urgent Appeal: UK-Based Individual Hosting and Promoting a UN-Designated Terrorist on Social Media – Breach of UK Counter-Terrorism Laws')}&body=${encodeURIComponent(defaultEmailBody)}`;
                
                sendEmailButton.href = mailtoLink;
            });
        })
        .catch(error => console.error('Error loading congressman data:', error));
});
