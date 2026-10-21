export type GateState = "ready" | "missing" | "pending";

export type StartABusinessState = {
  chatgptIdentity: GateState;
  githubConnection: GateState;
  repoName?: string;
  blueprintStatus: "not_started" | "draft" | "review" | "prepared";
  classificationStatus: "unknown" | "proposed" | "verified";
  formationStatus: "not_ready" | "ready_for_handoff" | "provider_opened";
};

export type StartABusinessAction =
  | "connect_github"
  | "prepare_blueprint"
  | "review_blueprint"
  | "open_repository"
  | "open_doola_handoff";

export type StartABusinessWidgetProps = {
  state: StartABusinessState;
  businessName?: string;
  firstSale?: string;
  doolaReferralUrl?: string;
  onAction?: (action: StartABusinessAction) => void;
};
