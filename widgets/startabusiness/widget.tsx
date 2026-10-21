import React from "react";
import type {
  GateState,
  StartABusinessAction,
  StartABusinessWidgetProps,
} from "./types";

const gateLabel: Record<GateState, string> = {
  ready: "✓",
  pending: "…",
  missing: "○",
};

function ActionButton({
  label,
  action,
  enabled,
  onAction,
}: {
  label: string;
  action: StartABusinessAction;
  enabled: boolean;
  onAction?: (action: StartABusinessAction) => void;
}) {
  return (
    <button
      type="button"
      disabled={!enabled}
      onClick={() => enabled && onAction?.(action)}
      style={{
        appearance: "none",
        border: "1px solid currentColor",
        borderRadius: 12,
        padding: "10px 12px",
        font: "inherit",
        background: enabled ? "transparent" : "rgba(127,127,127,.08)",
        opacity: enabled ? 1 : 0.5,
        cursor: enabled ? "pointer" : "not-allowed",
      }}
      aria-disabled={!enabled}
    >
      {label}
    </button>
  );
}

export function StartABusinessWidget({
  state,
  businessName,
  firstSale,
  doolaReferralUrl,
  onAction,
}: StartABusinessWidgetProps) {
  const identityReady = state.chatgptIdentity === "ready";
  const githubReady = state.githubConnection === "ready";
  const actionMode = identityReady && githubReady;
  const hasDraft = ["draft", "review", "prepared"].includes(
    state.blueprintStatus,
  );
  const prepared = state.blueprintStatus === "prepared";
  const formationReady = state.formationStatus === "ready_for_handoff";

  return (
    <section
      aria-label="#startabusiness agentic widget"
      style={{
        display: "grid",
        gap: 16,
        padding: 18,
        border: "1px solid rgba(127,127,127,.25)",
        borderRadius: 20,
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <header style={{ display: "grid", gap: 4 }}>
        <div style={{ fontSize: 13, opacity: 0.68 }}>YÆL × æ Studio</div>
        <strong style={{ fontSize: 24 }}>#startabusiness</strong>
        <span style={{ opacity: 0.76 }}>
          Business Preparation · Discover → Own → Configure → Run → Verify → Improve
        </span>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 10,
        }}
      >
        <div>
          {gateLabel[state.chatgptIdentity]} ChatGPT identity
        </div>
        <div>
          {gateLabel[state.githubConnection]} GitHub connection
        </div>
      </div>

      <div
        style={{
          padding: 12,
          borderRadius: 14,
          background: actionMode
            ? "rgba(80,180,120,.10)"
            : "rgba(220,150,70,.10)",
        }}
      >
        <strong>{actionMode ? "ACTION MODE ENABLED" : "ACTION MODE LOCKED"}</strong>
        <div style={{ marginTop: 4, opacity: 0.74 }}>
          {actionMode
            ? "Connected actions may be proposed within their own authority boundaries."
            : "Connect the missing gate before repository actions become executable."}
        </div>
      </div>

      <div style={{ display: "grid", gap: 6 }}>
        <div>
          <strong>Business</strong> · {businessName || "not named yet"}
        </div>
        <div>
          <strong>First sale</strong> · {firstSale || "not captured yet"}
        </div>
        <div>
          <strong>Blueprint</strong> · {state.blueprintStatus}
        </div>
        <div>
          <strong>Classification</strong> · {state.classificationStatus}
        </div>
        <div>
          <strong>Formation pathway</strong> · {state.formationStatus}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 10,
        }}
      >
        {!githubReady && (
          <ActionButton
            label="Connect GitHub"
            action="connect_github"
            enabled={identityReady}
            onAction={onAction}
          />
        )}

        <ActionButton
          label="Prepare blueprint"
          action="prepare_blueprint"
          enabled={actionMode}
          onAction={onAction}
        />

        <ActionButton
          label="Review blueprint"
          action="review_blueprint"
          enabled={actionMode && hasDraft}
          onAction={onAction}
        />

        <ActionButton
          label="Open repository"
          action="open_repository"
          enabled={actionMode && prepared && Boolean(state.repoName)}
          onAction={onAction}
        />

        <ActionButton
          label="Onboard with doola"
          action="open_doola_handoff"
          enabled={formationReady && Boolean(doolaReferralUrl)}
          onAction={onAction}
        />
      </div>

      {formationReady && doolaReferralUrl && (
        <p style={{ margin: 0, fontSize: 12, opacity: 0.65 }}>
          Affiliate handoff: Yael Méndez's doola referral. Provider-controlled
          formation, payment, identity, and filing remain outside this widget
          unless separately authorized through supported tools.
        </p>
      )}

      <footer style={{ display: "grid", gap: 3, fontSize: 13 }}>
        <strong>❤️ Return value to the human · Work here.</strong>
        <span style={{ opacity: 0.65 }}>
          Identity ≠ authority · commit ≠ merge · merge ≠ deploy · deploy ≠ publish
        </span>
      </footer>
    </section>
  );
}
