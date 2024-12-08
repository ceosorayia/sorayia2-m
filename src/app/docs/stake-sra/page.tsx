import React from "react";
import "../docs.css";

const page = () => {
  return (
    <div className="content-container">
      <h1 className="main-title">Staking</h1>
      <p className="main-paragraph">
        $SRA holders can now stake tokens in the{" "}
        <a href="https://staking.sorayia.com" className="link">
          staking portal
        </a>{" "}
        and earn 150% APY on the staked amount. Staking progress can be easily
        managed and tracked in the portal.
      </p>
      <p className="main-paragraph">
        By staking tokens, users will receive an ever-increasing APY and higher
        rewards, the longer the staking period. Every month, APY will increase
        by 10%, offering more and more rewards as users stake long-term.
      </p>
      <p className="main-paragraph">
        Along with earning on staked $SRA, staking will also offer access to
        $SRA utility in the Sorayia.com ecosystem and future governance rights
        to the protocol.
      </p>

      <h2 className="section-title">How to Stake</h2>
      <ol className="numbered-points">
        <li>
          Go to the staking portal at{" "}
          <a href="https://staking.sorayia.com" className="link">
            https://staking.sorayia.com
          </a>{" "}
          and connect your Metamask wallet.
        </li>
        <li>Choose the amount of $SRA you want to stake.</li>
        <li>Start earning with as little as 1 $SRA!</li>
      </ol>
    </div>
  );
};

export default page;
