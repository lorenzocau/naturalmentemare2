// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oim27Bu1ThuTn7RkGgxh5P
// Component: piHt2g2N84wD
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oim27Bu1ThuTn7RkGgxh5P/projectcss
import sty from "./PlasmicTest.module.css"; // plasmic-import: piHt2g2N84wD/css
import CircleFilledSvgrepoComsvgIcon from "./icons/PlasmicIcon__CircleFilledSvgrepoComsvg"; // plasmic-import: EA8vzL1yY73j/icon

createPlasmicElementProxy;

export const PlasmicTest__VariantProps = new Array();

export const PlasmicTest__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTest__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicTest.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicTest.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicTest.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yw0Oy)}
          >
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div
                data-plasmic-name={"column"}
                data-plasmic-override={overrides.column}
                className={classNames(projectcss.all, sty.column)}
              >
                <div
                  data-plasmic-name={"background2"}
                  data-plasmic-override={overrides.background2}
                  className={classNames(projectcss.all, sty.background2)}
                />
              </div>
            </div>
          </Stack__>
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__tt61I)}>
              <div className={classNames(projectcss.all, sty.freeBox__u95Z1)}>
                <svg
                  className={classNames(projectcss.all, sty.svg__plftT)}
                  role={"img"}
                />

                <CircleFilledSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__cCeix)}
                  role={"img"}
                />

                <CircleFilledSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__zCXvj)}
                  role={"img"}
                />

                <CircleFilledSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__a7Kbn)}
                  role={"img"}
                />

                <CircleFilledSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__ccXko)}
                  role={"img"}
                />

                <CircleFilledSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__nmX93)}
                  role={"img"}
                />

                <CircleFilledSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__f9Fz)}
                  role={"img"}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "column", "background2", "section"],
  columns: ["columns", "column", "background2"],
  column: ["column", "background2"],
  background2: ["background2"],
  section: ["section"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTest__ArgProps,
          internalVariantPropNames: PlasmicTest__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTest__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTest";
  } else {
    func.displayName = `PlasmicTest.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "oim27Bu1ThuTn7RkGgxh5P"
    });
    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicTest = Object.assign(
  // Top-level PlasmicTest renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    background2: makeNodeComponent("background2"),
    section: makeNodeComponent("section"),
    // Metadata about props expected for PlasmicTest
    internalVariantProps: PlasmicTest__VariantProps,
    internalArgProps: PlasmicTest__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Test",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTest;
/* prettier-ignore-end */
