# Comparison class models

## One-off models
- `ccrsa.wppl`: Comparison class inference model (listener model), for use with comparison class inference experiment
- `adj-endorsement.wppl`: Adjective endorsement speaker model, for use with adjective endorsement

## Full Bayesian Treatment (BDA with RSA)
- `fbt-for-subCatPriors.wppl`: Maximally, includes both of the above one-off models.
Puts uncertainty over the parameters of the subordinate class prior as well as parameters of the RSA.
Incorporates the data in order to infer these parameters and generate posterior predictions.

### Adjective RSA package

This holds much of the shared code for use with `ccrsa` and `adj-endorsement`.

Contents:
  - `utils.wppl`: helper functions (e.g., `KL`, `round`)
  - `prior.wppl`: `statePrior` and various discretizations
  - `language.wppl`: `utterancePrior` and `thresholdPrior`
