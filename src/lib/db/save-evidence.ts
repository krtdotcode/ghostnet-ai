type EvidenceBundle = {
  tenantId: string;
  brandId: string;
  scanId?: string;
  targetUrl: string;
  observedDomain?: string;
  rawTitle?: string;
  rawExcerpt?: string;
  threatType: 'typosquat' | 'phishing' | 'spoofed_social' | 'impersonation' | 'lookalike_domain' | 'benign';
  htmlSnapshotPath: string;
  screenshotPath: string;
  threatScore: number;
  confidenceScore: number;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  analysisState: 'pending' | 'analyzing' | 'validated' | 'needs_review' | 'report_ready';
  threatState: 'discovered' | 'captured' | 'analyzing' | 'validated' | 'needs_review' | 'report_ready' | 'closed';
  legalRecommendation?: string;
};

type SupabaseConfig = {
  url: string;
  serviceRoleKey: string;
};

function getSupabaseConfig(): SupabaseConfig {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) {
    throw new Error('SUPABASE_URL is required');
  }

  if (!serviceRoleKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is required');
  }

  return { url, serviceRoleKey };
}

async function supabaseRequest<T>(path: string, init: RequestInit): Promise<T> {
  const { url, serviceRoleKey } = getSupabaseConfig();
  const response = await fetch(`${url}${path}`, {
    ...init,
    headers: {
      apikey: serviceRoleKey,
      authorization: `Bearer ${serviceRoleKey}`,
      'content-type': 'application/json',
      ...(init.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Supabase request failed for ${path}: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

export async function saveEvidence(bundle: EvidenceBundle) {
  const row = {
    tenant_id: bundle.tenantId,
    brand_id: bundle.brandId,
    scan_id: bundle.scanId ?? null,
    threat_type: bundle.threatType,
    target_url: bundle.targetUrl,
    observed_domain: bundle.observedDomain ?? null,
    raw_title: bundle.rawTitle ?? null,
    raw_excerpt: bundle.rawExcerpt ?? null,
    html_snapshot_path: bundle.htmlSnapshotPath,
    screenshot_path: bundle.screenshotPath,
    threat_score: bundle.threatScore,
    confidence_score: bundle.confidenceScore,
    urgency_level: bundle.urgencyLevel,
    analysis_state: bundle.analysisState,
    threat_state: bundle.threatState,
    legal_recommendation: bundle.legalRecommendation ?? null,
  };

  const inserted = await supabaseRequest<Array<Record<string, unknown>>>('/rest/v1/threats?select=*', {
    method: 'POST',
    headers: {
      Prefer: 'return=representation',
    },
    body: JSON.stringify(row),
  });

  return inserted[0];
}