// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oim27Bu1ThuTn7RkGgxh5P
// Component: _eHWE4BWyqEM
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import Button2 from "../../Button2"; // plasmic-import: Yp4SbBaPO1b8/component
import { useScreenVariants as useScreenVariantsith9ZDalCwV } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Ith9ZDalCw-V/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oim27Bu1ThuTn7RkGgxh5P/projectcss
import sty from "./PlasmicTeam.module.css"; // plasmic-import: _eHWE4BWyqEM/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: K_XxEM7Q4cIW/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: S_tcS_gFiIGf/icon
import Whatsapp128SvgrepoComsvgIcon from "./icons/PlasmicIcon__Whatsapp128SvgrepoComsvg"; // plasmic-import: FR01N8LietG4/icon

createPlasmicElementProxy;

export const PlasmicTeam__VariantProps = new Array();

export const PlasmicTeam__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTeam__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsith9ZDalCwV()
  });
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicTeam.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicTeam.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicTeam.pageMetadata.title}
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
            className={classNames(projectcss.all, sty.freeBox__tejrJ)}
          >
            <div className={classNames(projectcss.all, sty.columns__aXPyB)}>
              <div className={classNames(projectcss.all, sty.column__ktjLl)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jb93F)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__hjtkf)}
                  >
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2___7TUm5
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__gpRiW)}
                          role={"img"}
                        />
                      }
                      link={`/`}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(
                            projectcss.all,
                            sty.svg___07RrP
                          )}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__nNl3)}
                        displayHeight={"60px"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"none"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"60px"}
                        onClick={async event => {
                          const $steps = {};
                          $steps["goToHomepage"] = true
                            ? (() => {
                                const actionArgs = { destination: `/` };
                                return (({ destination }) => {
                                  if (
                                    typeof destination === "string" &&
                                    destination.startsWith("#")
                                  ) {
                                    document
                                      .getElementById(destination.substr(1))
                                      .scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    __nextRouter?.push(destination);
                                  }
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["goToHomepage"] != null &&
                            typeof $steps["goToHomepage"] === "object" &&
                            typeof $steps["goToHomepage"].then === "function"
                          ) {
                            $steps["goToHomepage"] = await $steps[
                              "goToHomepage"
                            ];
                          }
                        }}
                        src={{
                          src: "/plasmic/naturalmentemare/images/fishingBoatBlackSilhouetteSmallShipsInFlatDesignKidToyStyleIllustrationOnWhiteBackgroundVectorRemovebgPreviewpng.png",
                          fullWidth: 500,
                          fullHeight: 500,
                          aspectRatio: undefined
                        }}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dYJnA
                        )}
                      >
                        {""}
                      </div>
                    </Button2>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__lOxAa)}
                    >
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__mcRm1
                        )}
                        color={"clear"}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__zCm9S
                            )}
                            role={"img"}
                          />
                        }
                        link={`/`}
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__bh7C
                            )}
                            role={"img"}
                          />
                        }
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__f6U
                          )}
                        >
                          {"Home"}
                        </div>
                      </Button2>
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__rvbwH
                        )}
                        color={"clear"}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__idvQc
                            )}
                            role={"img"}
                          />
                        }
                        link={`/attivita`}
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__t8Uey
                            )}
                            role={"img"}
                          />
                        }
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__foKnS
                          )}
                        >
                          {"Attivit\u00e0"}
                        </div>
                      </Button2>
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__gXsZo
                        )}
                        color={"clear"}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__lqvm
                            )}
                            role={"img"}
                          />
                        }
                        link={`/team`}
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__k0X2G
                            )}
                            role={"img"}
                          />
                        }
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__skntC
                          )}
                        >
                          {"Chi siamo"}
                        </div>
                      </Button2>
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2___3S5Z
                        )}
                        color={"clear"}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__pFrKf
                            )}
                            role={"img"}
                          />
                        }
                        link={`/gallery`}
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__paBa0
                            )}
                            role={"img"}
                          />
                        }
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ojDxT
                          )}
                        >
                          {"Gallery"}
                        </div>
                      </Button2>
                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__prym
                        )}
                        color={"clear"}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__ohBQm
                            )}
                            role={"img"}
                          />
                        }
                        link={`/contatti`}
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__qcR1T
                            )}
                            role={"img"}
                          />
                        }
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ov0E
                          )}
                        >
                          {"Contatti"}
                        </div>
                      </Button2>
                    </Stack__>
                    {false ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___5K0V2
                        )}
                      >
                        <button
                          data-plasmic-name={"button"}
                          data-plasmic-override={overrides.button}
                          className={classNames(
                            projectcss.all,
                            projectcss.button,
                            projectcss.__wab_text,
                            sty.button
                          )}
                        >
                          {"Sign up"}
                        </button>
                        <Button2
                          className={classNames(
                            "__wab_instance",
                            sty.button2__usw3G
                          )}
                          color={"clear"}
                          endIcon={
                            <Icon38Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__lcc
                              )}
                              role={"img"}
                            />
                          }
                          startIcon={
                            <ChecksvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__kkHgQ
                              )}
                              role={"img"}
                            />
                          }
                          submitsForm={true}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__es3Hc
                            )}
                          >
                            {"Log in"}
                          </div>
                        </Button2>
                      </div>
                    ) : null}
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link__xgktH
                      )}
                      component={Link}
                      href={"https://www.plasmic.app/"}
                      platform={"nextjs"}
                    >
                      {""}
                    </PlasmicLink__>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__at05D
                      )}
                      component={Link}
                      href={"https://wa.me/3758002079"}
                      platform={"nextjs"}
                      target={"_blank"}
                    >
                      <Whatsapp128SvgrepoComsvgIcon
                        className={classNames(projectcss.all, sty.svg__oT9Lx)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__rJEjT
                        )}
                      >
                        {" Scrivici su Whatsapp!"}
                      </div>
                    </PlasmicLink__>
                  </Stack__>
                </Stack__>
              </div>
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jjRt2)}
          >
            <div className={classNames(projectcss.all, sty.columns___23Ne)}>
              <div className={classNames(projectcss.all, sty.column__uiBbq)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__nEqg1)}
                >
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"copy"}
                    data-plasmic-override={overrides.copy}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.copy)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__gPwBh)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__jgMcu
                        )}
                      >
                        {"Welcome"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___5IIkt
                        )}
                      >
                        {"Il nostro Team"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__iw8Du
                        )}
                      >
                        {
                          "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                        }
                      </div>
                    </Stack__>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__vrx9U)}
                    />
                  </Stack__>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.column__jTm9)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__rNlMa)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"320px"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={
                    "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80"
                  }
                />

                <div
                  className={classNames(projectcss.all, sty.freeBox___80Utt)}
                />
              </div>
            </div>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "button", "copy"],
  button: ["button"],
  copy: ["copy"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTeam__ArgProps,
          internalVariantPropNames: PlasmicTeam__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeam__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeam";
  } else {
    func.displayName = `PlasmicTeam.${nodeName}`;
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

export const PlasmicTeam = Object.assign(
  // Top-level PlasmicTeam renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    copy: makeNodeComponent("copy"),
    // Metadata about props expected for PlasmicTeam
    internalVariantProps: PlasmicTeam__VariantProps,
    internalArgProps: PlasmicTeam__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Team",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTeam;
/* prettier-ignore-end */
