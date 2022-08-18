import { usePersistFn } from "ahooks";
import { NavBar } from "antd-mobile";
import styles from "./index.scss";
import React, { CSSProperties, useMemo } from "react";
import classnames from "classnames";
interface IProps {
  title?: string;
  onBack?: () => void;
  header?: React.ReactElement;
  footer?: React.ReactElement;
  children?: React.ReactNode
}

const MbPage: React.FC<IProps> = (props) => {
  const { header, onBack } = props;
  const withFooter = useMemo(() => !!props.footer, [props.footer]);
  const handleGoBack = usePersistFn(() => {
    onBack?.();
  });
  const headerComp = useMemo(() => {
    if (header) {
      return header;
    }
    return (
      <NavBar style={{ background: "#fff" }} back="返回" onBack={handleGoBack}>
        {props.title}
      </NavBar>
    );
  }, [header]);
  return (
    <div>
      {!!headerComp && <div className={styles.navbar}>{headerComp}</div>}
      <div
        className={classnames(styles.mbody, {
          [styles.withfooter]: withFooter,
        })}
      >
        {props.children}
      </div>
      {withFooter && <div className={styles.mfooter}>{props.footer}</div>}
    </div>
  );
};

export default MbPage;
