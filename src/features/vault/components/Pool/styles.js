const styles = theme => ({
  container: {
    marginBottom: '24px',
    border: '1px solid ' + theme.palette.background.border,
    borderRadius: theme.overrides.borderRadius,
  },
  accordion: {
    width: '100%',
    backgroundColor: theme.palette.background.primary,
    borderRadius: theme.overrides.borderRadius,
  },
  divider: {
    margin: '0 30px',
  },
});

export default styles;
