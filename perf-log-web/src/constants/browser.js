angular.module('perfLog')
    .constant('browserTSV',
    'date	Google Chrome	Internet Explorer	Firefox	Safari	Microsoft Edge	Opera	Mozilla	Other/Unknown\n'
    + '2015 Jun 15	48.09	24.14	18.82	7.46	0.03	1.32	0.12	0.01\n'
    + '2015 Jun 16	48	24.19	18.96	7.36	0.03	1.32	0.12	0.01\n'
    + '2015 Jun 17	47.87	24.44	18.91	7.27	0.03	1.36	0.12	0.01\n'
    + '2015 Jun 18	48.22	23.83	19.16	7.24	0.04	1.39	0.12	0.01\n'
    + '2015 Jun 19	47.91	23.86	19.35	7.31	0.04	1.41	0.12	0.01\n'
    + '2015 Jun 20	48.78	21.14	19.66	8.42	0.05	1.83	0.1	0.01\n'
    + '2015 Jun 21	49.43	20.55	19.42	8.66	0.05	1.75	0.12	0.01\n'
    + '2015 Jun 22	48.98	23.47	18.84	7.25	0.04	1.28	0.12	0.01\n'
    + '2015 Jun 23	48.69	23.76	18.89	7.22	0.04	1.27	0.11	0.01\n'
    + '2015 Jun 24	49.17	23.35	18.91	7.09	0.04	1.32	0.12	0.01\n'
    + '2015 Jun 25	49.32	23.39	18.76	7.03	0.04	1.34	0.11	0\n'
    + '2015 Jun 26	49.39	23.11	18.84	7.14	0.04	1.37	0.1	0\n'
    + '2015 Jun 27	49.77	20.68	19.23	8.46	0.05	1.71	0.09	0.01\n'
    + '2015 Jun 28	50.07	20.41	18.91	8.77	0.05	1.69	0.1	0.01\n'
    + '2015 Jun 29	49.32	23.3	18.54	7.4	0.04	1.27	0.11	0.01\n'
    + '2015 Jun 30	49.99	22.94	18.45	7.07	0.07	1.32	0.13	0.02\n'
    + '2015 Jul 1	50.22	22.79	18.46	6.95	0.07	1.37	0.12	0.02\n'
    + '2015 Jul 2	50.33	22.59	18.74	6.69	0.07	1.45	0.12	0.02\n'
    + '2015 Jul 3	50.4	21.29	19.28	7.28	0.08	1.54	0.11	0.02\n'
    + '2015 Jul 4	50.83	20.02	19.12	7.99	0.08	1.82	0.11	0.02\n'
    + '2015 Jul 5	51.6	19.6	18.43	8.58	0.07	1.62	0.1	0.01\n'
    + '2015 Jul 6	50.53	22.64	18.04	7.33	0.07	1.27	0.11	0.01\n'
    + '2015 Jul 7	50.01	23.02	18.32	7.25	0.07	1.25	0.06	0.01\n'
    + '2015 Jul 8	49.52	23.17	18.55	7.31	0.07	1.32	0.05	0.01\n'
    + '2015 Jul 9	49.31	23.24	18.7	7.22	0.08	1.39	0.05	0.01\n'
    + '2015 Jul 10	48.4	23.68	18.97	7.37	0.09	1.43	0.05	0.01\n'
    + '2015 Jul 11	48.87	21.22	19.33	8.65	0.1	1.76	0.06	0.01\n'
    + '2015 Jul 12	49.4	20.87	18.84	8.99	0.09	1.73	0.07	0.01\n'
    + '2015 Jul 13	49.12	23.35	18.49	7.51	0.07	1.39	0.05	0.01\n'
    + '2015 Jul 14	49.36	23.2	18.48	7.48	0.08	1.35	0.05	0.01\n'
    + '2015 Jul 15	48.88	23.73	18.46	7.44	0.09	1.34	0.05	0.01\n'
    + '2015 Jul 16	48.76	23.77	18.5	7.43	0.09	1.4	0.05	0.01\n'
    + '2015 Jul 17	47.58	24.54	18.76	7.53	0.09	1.43	0.06	0.01\n'
    + '2015 Jul 18	48.06	21.89	19.14	8.99	0.11	1.74	0.07	0.01\n'
    + '2015 Jul 19	48.39	21.5	19	9.23	0.11	1.7	0.07	0.01\n'
    + '2015 Jul 20	48.32	23.91	18.62	7.68	0.09	1.32	0.06	0.01\n'
    + '2015 Jul 21	47.81	24.98	18.34	7.52	0.08	1.2	0.06	0.01\n'
    + '2015 Jul 22	48.28	24.4	18.45	7.44	0.08	1.29	0.06	0.01\n'
    + '2015 Jul 23	48.41	24.2	18.57	7.35	0.08	1.31	0.07	0.01\n'
    + '2015 Jul 24	48.22	23.96	18.67	7.55	0.1	1.42	0.06	0.01\n'
    + '2015 Jul 25	48.11	21.86	19.28	8.88	0.1	1.65	0.08	0.02\n'
    + '2015 Jul 26	48.27	21.57	19	9.38	0.11	1.59	0.08	0.01\n'
    + '2015 Jul 27	48.5	23.72	18.59	7.76	0.1	1.27	0.06	0.01\n'
    + '2015 Jul 28	48.48	23.95	18.46	7.61	0.12	1.31	0.07	0.02\n'
    + '2015 Jul 29	48.33	23.77	18.56	7.51	0.42	1.33	0.06	0.02\n'
    + '2015 Jul 30	47.8	24.06	18.6	7.46	0.7	1.3	0.07	0.02\n'
    + '2015 Jul 31	48.41	22.9	18.88	7.48	0.84	1.41	0.07	0.01\n'
    + '2015 Aug 1	48.8	20.29	19.16	8.75	1.16	1.75	0.07	0.02\n'
    + '2015 Aug 2	48.95	20.27	18.81	9	1.23	1.65	0.08	0.02\n'
    + '2015 Aug 3	49.07	22.67	18.35	7.59	0.93	1.31	0.07	0.01\n'
    + '2015 Aug 4	49.18	22.72	18.31	7.44	0.95	1.32	0.07	0.02\n'
    + '2015 Aug 5	49.56	22.37	18.28	7.38	0.99	1.34	0.06	0.01\n'
    + '2015 Aug 6	49.77	21.81	18.28	7.67	1.12	1.28	0.05	0.01\n'
    + '2015 Aug 7	48.73	22.63	18.42	7.5	1.26	1.39	0.06	0.01\n'
    + '2015 Aug 8	49.6	18.97	19.11	8.79	1.69	1.74	0.09	0.02\n'
    + '2015 Aug 9	49.68	18.85	18.71	9.23	1.72	1.72	0.08	0.02\n'
    + '2015 Aug 10	49.11	22.54	17.97	7.64	1.28	1.39	0.06	0.01\n'
    + '2015 Aug 11	49.21	22.59	17.96	7.56	1.27	1.35	0.05	0.01\n'
    + '2015 Aug 12	48.95	22.68	18.21	7.44	1.3	1.35	0.06	0.02\n'
    + '2015 Aug 13	49.31	22.28	18.19	7.32	1.31	1.51	0.06	0.02\n'
    + '2015 Aug 14	49.08	21.98	18.38	7.47	1.43	1.56	0.07	0.02\n'
    + '2015 Aug 15	49.1	19.47	18.77	8.85	1.87	1.86	0.08	0.01\n'
    + '2015 Aug 16	49.5	19.33	18.42	9.12	1.83	1.72	0.08	0.01\n'
    + '2015 Aug 17	49.42	22.12	18.06	7.5	1.36	1.44	0.08	0.02\n'
    + '2015 Aug 18	49.46	22.16	18.05	7.43	1.41	1.41	0.06	0.01\n'
    + '2015 Aug 19	49.51	22.21	17.93	7.46	1.39	1.42	0.07	0.01\n'
    + '2015 Aug 20	49.43	22.38	17.91	7.31	1.42	1.47	0.06	0.01\n'
    + '2015 Aug 21	49.44	21.79	18.3	7.39	1.51	1.47	0.08	0.01\n'
    + '2015 Aug 22	49.79	19.29	18.51	8.67	1.91	1.74	0.08	0.01\n'
    + '2015 Aug 23	50.12	18.91	18.1	9.11	1.89	1.8	0.07	0.01\n'
    + '2015 Aug 24	49.34	22.2	18.01	7.62	1.48	1.29	0.05	0\n'
    + '2015 Aug 25	49.21	22.51	17.91	7.47	1.47	1.38	0.05	0.01\n'
    + '2015 Aug 26	49.06	22.58	17.92	7.52	1.47	1.39	0.04	0.01\n'
    + '2015 Aug 27	48.89	22.63	17.98	7.57	1.51	1.35	0.06	0.02\n'
    + '2015 Aug 28	48.69	22.44	18.2	7.56	1.61	1.43	0.06	0.01\n'
    + '2015 Aug 29	48.64	19.87	18.43	9.16	2.07	1.74	0.08	0.01\n'
    + '2015 Aug 30	49.72	18.84	17.88	9.76	2.03	1.69	0.08	0.01\n'
    + '2015 Aug 31	49.43	21.94	17.82	7.87	1.57	1.31	0.05	0.01\n'
    + '2015 Sep 1	49.65	21.91	17.95	7.52	1.52	1.39	0.06	0.01\n'
    + '2015 Sep 2	49.73	21.85	18.02	7.49	1.53	1.3	0.06	0.01\n'
    + '2015 Sep 3	49.59	21.97	17.88	7.6	1.58	1.31	0.06	0.01\n'
    + '2015 Sep 4	49.52	21.64	18.06	7.62	1.67	1.41	0.06	0.01\n'
    + '2015 Sep 5	50.28	18.93	18.19	8.71	2.13	1.69	0.07	0.01\n'
    + '2015 Sep 6	50.25	18.67	18.2	9.04	2.09	1.67	0.07	0.01\n'
    + '2015 Sep 7	49.83	19.8	18.39	8.63	1.86	1.43	0.05	0.01\n'
    + '2015 Sep 8	50	21.8	17.62	7.66	1.55	1.31	0.06	0.01\n'
    + '2015 Sep 9	49.81	21.89	17.58	7.83	1.59	1.25	0.05	0.01\n'
    + '2015 Sep 10	49.65	21.93	17.74	7.82	1.6	1.19	0.05	0.01\n'
    + '2015 Sep 11	49.75	21.71	17.88	7.64	1.67	1.29	0.05	0.01\n'
    + '2015 Sep 12	49.86	19.04	17.96	9.3	2.21	1.56	0.06	0.01\n'
    + '2015 Sep 13	50.1	18.71	17.76	9.69	2.19	1.49	0.06	0.01\n'
    + '2015 Sep 14	49.91	21.55	17.87	7.74	1.66	1.21	0.05	0.01\n'
    + '2015 Sep 15	50.1	21.34	17.96	7.63	1.66	1.25	0.05	0.01\n'
    + '2015 Sep 16	50.6	21.53	17.44	7.56	1.59	1.23	0.05	0.01\n'
    + '2015 Sep 17	50.59	21.59	17.55	7.37	1.6	1.24	0.05	0.01\n'
    + '2015 Sep 18	50.57	21.75	17.43	7.17	1.7	1.32	0.05	0\n'
    + '2015 Sep 19	51.33	18.77	17.63	8.37	2.17	1.66	0.05	0.01\n'
    + '2015 Sep 20	51.41	18.15	17.55	9.09	2.17	1.58	0.05	0.01\n'
    + '2015 Sep 21	50.76	21.38	17.41	7.52	1.67	1.22	0.04	0.01\n'
    + '2015 Sep 22	50.6	21.48	17.55	7.41	1.7	1.22	0.04	0\n'
    + '2015 Sep 23	50.56	21.5	17.52	7.42	1.71	1.25	0.04	0\n'
    + '2015 Sep 24	50.66	21.34	17.52	7.45	1.7	1.29	0.04	0\n'
    + '2015 Sep 25	50.87	20.84	17.84	7.24	1.78	1.39	0.04	0.01\n'
    + '2015 Sep 26	51.66	17.77	18.01	8.52	2.28	1.71	0.05	0.01\n'
    + '2015 Sep 27	51.99	17.24	17.71	9.17	2.25	1.6	0.04	0\n'
    + '2015 Sep 28	50.77	21.23	17.52	7.49	1.73	1.22	0.03	0.01\n'
    + '2015 Sep 29	50.75	21.39	17.47	7.38	1.74	1.22	0.04	0.01\n'
    + '2015 Sep 30	50.8	21.34	17.4	7.46	1.74	1.23	0.03	0\n'
    + '2015 Oct 1	50.82	21.39	17.19	7.55	1.78	1.24	0.03	0\n'
    + '2015 Oct 2	50.93	21.17	17.32	7.38	1.86	1.32	0.03	0\n'
    + '2015 Oct 3	51.69	18.12	17.51	8.61	2.34	1.68	0.03	0\n'
    + '2015 Oct 4	52.06	17.59	17.18	9.25	2.32	1.58	0.03	0\n'
    + '2015 Oct 5	51.4	20.73	17.24	7.56	1.81	1.22	0.03	0\n'
    + '2015 Oct 6	51.81	20.35	17.31	7.46	1.79	1.25	0.03	0\n'
    + '2015 Oct 7	51.98	20.18	17.29	7.49	1.76	1.27	0.03	0\n'
    + '2015 Oct 8	50.97	20.56	17.72	7.63	1.79	1.3	0.03	0\n'
    + '2015 Oct 9	50.94	20.42	17.8	7.52	1.88	1.4	0.03	0\n'
    + '2015 Oct 10	51.02	17.74	18.26	8.79	2.38	1.75	0.03	0\n'
    + '2015 Oct 11	52.07	16.83	17.77	9.23	2.32	1.72	0.04	0.01\n'
    + '2015 Oct 12	50.9	19.94	17.55	8.27	1.94	1.35	0.04	0.01\n'
    + '2015 Oct 13	51.52	19.66	17.71	7.76	1.78	1.51	0.04	0.01\n'
    + '2015 Oct 14	51.75	19.37	17.85	7.72	1.82	1.44	0.04	0\n'
    + '2015 Oct 15	51.37	19.66	17.92	7.68	1.87	1.46	0.03	0\n'
    + '2015 Oct 16	51.29	19.56	18.06	7.62	1.91	1.52	0.03	0\n'
    + '2015 Oct 17	52.47	15.8	18.39	8.96	2.46	1.88	0.05	0\n'
    + '2015 Oct 18	51.88	16.03	18.07	9.75	2.42	1.79	0.05	0\n'
    + '2015 Oct 19	51.48	19.69	17.68	7.87	1.83	1.41	0.03	0\n'
    + '2015 Oct 20	51.58	19.73	17.63	7.85	1.8	1.38	0.03	0\n'
    + '2015 Oct 21	52.04	20.14	16.99	7.63	1.81	1.34	0.03	0\n'
    + '2015 Oct 22	51.62	20.1	17.28	7.75	1.86	1.35	0.04	0\n'
    + '2015 Oct 23	51.87	19.88	17.17	7.64	1.94	1.45	0.04	0.01\n'
    + '2015 Oct 24	52.62	16.25	17.52	9.28	2.5	1.78	0.05	0\n'
    + '2015 Oct 25	52.64	16.1	17.4	9.69	2.46	1.67	0.04	0.01\n'
    + '2015 Oct 26	52.29	19.72	17	7.81	1.88	1.26	0.03	0\n'
    + '2015 Oct 27	51.88	20.08	17.1	7.73	1.87	1.3	0.03	0\n'
    + '2015 Oct 28	51.92	19.48	17.49	7.86	1.93	1.28	0.03	0\n'
    + '2015 Oct 29	51.56	19.74	17.83	7.64	1.9	1.31	0.03	0\n'
    + '2015 Oct 30	51.8	19.42	17.86	7.5	1.99	1.38	0.03	0\n'
    + '2015 Oct 31	52.67	16.22	18.22	8.62	2.46	1.76	0.04	0\n'
    + '2015 Nov 1	52.4	15.92	17.77	9.7	2.48	1.62	0.1	0\n'
    + '2015 Nov 2	51.9	19.56	17.26	7.93	1.96	1.32	0.06	0\n'
    + '2015 Nov 3	51.95	19.83	17.41	7.53	1.89	1.33	0.06	0\n'
    + '2015 Nov 4	52.25	19.61	17.24	7.57	1.83	1.44	0.06	0\n'
    + '2015 Nov 5	51.98	19.9	17.2	7.63	1.87	1.35	0.05	0\n'
    + '2015 Nov 6	51.38	20.09	17.39	7.74	1.97	1.36	0.05	0\n'
    + '2015 Nov 7	52.45	16.46	17.38	9.32	2.6	1.7	0.08	0.01\n'
    + '2015 Nov 8	52.61	16.12	16.97	9.97	2.55	1.69	0.08	0.01\n'
    + '2015 Nov 9	51.65	20.18	16.67	8.21	1.96	1.28	0.05	0\n'
    + '2015 Nov 10	51.95	19.99	16.46	8.29	1.95	1.29	0.07	0.01\n'
    + '2015 Nov 11	52.74	18.91	16.38	8.49	2.04	1.37	0.06	0.01\n'
    + '2015 Nov 12	52.16	19.88	16.54	8.03	1.99	1.35	0.05	0\n'
    + '2015 Nov 13	52.17	19.7	16.65	7.98	2.09	1.35	0.05	0\n'
    + '2015 Nov 14	52.81	16.25	17.02	9.53	2.71	1.62	0.05	0\n'
    + '2015 Nov 15	52.89	15.65	16.97	10.25	2.62	1.56	0.06	0\n'
    + '2015 Nov 16	52.68	19.59	16.23	8.22	2	1.24	0.04	0\n'
    + '2015 Nov 17	52.6	19.62	16.38	8.12	1.96	1.28	0.04	0\n'
    + '2015 Nov 18	52.35	19.79	16.39	8.12	1.99	1.33	0.04	0\n'
    + '2015 Nov 19	52.37	19.81	16.46	8	2	1.31	0.05	0\n'
    + '2015 Nov 20	52.2	19.55	16.74	7.96	2.11	1.39	0.05	0\n'
    + '2015 Nov 21	52.7	16.03	17.04	9.83	2.72	1.62	0.06	0\n'
    + '2015 Nov 22	52.72	15.75	16.9	10.36	2.68	1.54	0.06	0\n'
    + '2015 Nov 23	52.35	19.53	16.53	8.21	2.04	1.28	0.05	0\n'
    + '2015 Nov 24	52.33	19.53	16.75	7.96	2.03	1.34	0.05	0\n'
    + '2015 Nov 25	52.34	19.04	17.02	7.82	2.07	1.64	0.06	0\n'
    + '2015 Nov 26	53.29	17.12	17.42	8.12	2.27	1.7	0.07	0\n'
    + '2015 Nov 27	52.46	17.83	17.12	8.58	2.49	1.46	0.06	0\n'
    + '2015 Nov 28	52.84	15.74	17.03	9.7	2.97	1.67	0.05	0\n'
    + '2015 Nov 29	52.8	15.57	16.72	10.32	2.91	1.63	0.06	0\n'
    + '2015 Nov 30	52.71	19.08	16.21	8.49	2.22	1.24	0.05	0\n'
    + '2015 Dec 1	52.41	19.62	16.28	8.11	2.25	1.29	0.04	0\n'
    + '2015 Dec 2	52.64	19.41	16.18	8.1	2.31	1.31	0.04	0\n'
    + '2015 Dec 3	52.37	19.3	16.4	8.23	2.31	1.35	0.04	0\n'
    + '2015 Dec 4	52.15	19.2	16.72	7.98	2.46	1.44	0.05	0\n'
    + '2015 Dec 5	52.15	15.77	17.33	9.82	3.18	1.68	0.07	0\n'
    + '2015 Dec 6	52.92	15.33	16.65	10.31	3.06	1.67	0.06	0\n'
    + '2015 Dec 7	52.59	19.15	16.25	8.36	2.34	1.26	0.05	0\n'
    + '2015 Dec 8	52.57	19.12	16.38	8.21	2.38	1.28	0.05	0.01\n'
    + '2015 Dec 9	52.47	19.47	16.41	7.98	2.31	1.3	0.05	0\n'
    + '2015 Dec 10	52.22	20	16.4	7.73	2.35	1.25	0.05	0\n'
    + '2015 Dec 11	51.97	19.54	16.69	7.91	2.49	1.34	0.06	0\n'
    + '2015 Dec 12	52.03	16.49	16.84	9.67	3.18	1.68	0.1	0.01\n'
    + '2015 Dec 13	52.17	16.22	16.61	10.18	3.16	1.57	0.08	0\n'
    + '2015 Dec 14	51.48	20.71	16.04	8.12	2.39	1.21	0.06	0\n'
    + '2015 Dec 15	51.64	20.54	16.11	8.05	2.37	1.23	0.05	0\n'
    + '2015 Dec 16	51.32	21.04	16.04	7.9	2.45	1.2	0.05	0\n'
    + '2015 Dec 17	51.03	21.29	16.13	7.77	2.46	1.25	0.06	0\n'
    + '2015 Dec 18	50.9	20.71	16.59	7.73	2.6	1.38	0.08	0.01\n'
    + '2015 Dec 19	51.36	17.02	17.13	9.36	3.29	1.75	0.09	0.01\n'
    + '2015 Dec 20	52.24	16.39	17.18	9.39	3.13	1.58	0.08	0.01\n'
    + '2015 Dec 21	51.44	20.62	16.64	7.45	2.51	1.28	0.06	0.01\n'
    + '2015 Dec 22	51.44	20.64	16.72	7.23	2.58	1.33	0.05	0\n'
    + '2015 Dec 23	50.69	21.15	16.69	7.24	2.7	1.46	0.06	0.01\n'
    + '2015 Dec 24	50.13	20.14	16.68	8	3.1	1.85	0.08	0.02\n'
    + '2015 Dec 25	50.55	17.4	16.92	9.19	3.73	2.1	0.09	0.01\n'
    + '2015 Dec 26	50.12	17.8	16.92	9.44	3.72	1.9	0.09	0\n'
    + '2015 Dec 27	50.68	17.25	16.89	9.55	3.73	1.81	0.09	0\n'
    + '2015 Dec 28	49.89	21.09	16.22	8.13	3.21	1.39	0.07	0.01\n'
    + '2015 Dec 29	50.27	20.86	16.25	7.95	3.22	1.37	0.08	0.01\n'
    + '2015 Dec 30	49.85	21.28	16.26	7.87	3.29	1.37	0.08	0.01\n'
    + '2015 Dec 31	49.4	20.41	16.43	8.52	3.57	1.59	0.08	0.01\n'
    + '2016 Jan 1	50.07	16.61	17.36	10.09	4.01	1.76	0.09	0.01\n'
    + '2016 Jan 2	50.72	16.66	17.22	9.67	3.91	1.74	0.08	0\n'
    + '2016 Jan 3	51.23	16.46	16.95	9.87	3.75	1.67	0.07	0\n'
    + '2016 Jan 4	51.26	20.36	16.35	7.84	2.85	1.29	0.05	0\n'
    + '2016 Jan 5	51.32	20.21	16.35	7.89	2.79	1.36	0.06	0\n'
    + '2016 Jan 6	51.81	19.86	16.2	7.93	2.76	1.38	0.05	0\n'
    + '2016 Jan 7	51.85	19.82	16.31	7.81	2.76	1.4	0.05	0\n'
    + '2016 Jan 8	50.99	20.36	16.55	7.64	2.9	1.49	0.06	0.01\n'
    + '2016 Jan 9	51.5	16.58	17.03	9.38	3.57	1.86	0.07	0.01\n'
    + '2016 Jan 10	51.88	15.91	17	9.79	3.52	1.81	0.07	0.01\n'
    + '2016 Jan 11	51.91	19.73	16.3	7.93	2.72	1.37	0.04	0\n'
    + '2016 Jan 12	51.99	19.63	16.35	7.84	2.74	1.39	0.07	0.01\n'
    + '2016 Jan 13	52.31	19.26	16.25	7.95	2.85	1.33	0.05	0\n'
    + '2016 Jan 14	52.07	19.64	16.1	7.95	2.87	1.32	0.04	0\n'
    + '2016 Jan 15	52.21	18.83	16.42	7.98	3.04	1.46	0.06	0.01\n'
    + '2016 Jan 16	52.65	15.51	16.86	9.5	3.66	1.75	0.06	0\n'
    + '2016 Jan 17	52.48	15.69	16.61	9.84	3.66	1.66	0.05	0\n'
    + '2016 Jan 18	52.07	18.91	16.31	8.36	3	1.3	0.05	0\n'
    + '2016 Jan 19	52.51	19.48	16.08	7.91	2.72	1.25	0.05	0\n'
    + '2016 Jan 20	52.82	19.01	16.14	7.97	2.76	1.25	0.05	0.01\n'
    + '2016 Jan 21	52.76	19.26	16.12	7.79	2.74	1.3	0.04	0\n'
    + '2016 Jan 22	52.56	18.8	16.33	7.9	2.95	1.4	0.05	0\n'
    + '2016 Jan 23	52.38	15.76	16.79	9.5	3.78	1.72	0.06	0\n'
    + '2016 Jan 24	53.12	15.22	16.55	9.83	3.57	1.65	0.06	0\n'
    + '2016 Jan 25	52.55	19.12	16.15	7.94	2.89	1.32	0.05	0\n'
    + '2016 Jan 26	52.45	19.49	16.03	7.83	2.87	1.28	0.04	0\n'
    + '2016 Jan 27	52.64	19.42	16.06	7.7	2.84	1.29	0.04	0\n'
    + '2016 Jan 28	51.95	19.87	16.15	7.77	2.92	1.32	0.04	0\n'
    + '2016 Jan 29	51.03	20	16.6	7.85	3.07	1.4	0.04	0\n'
    + '2016 Jan 30	50.97	16.86	17.28	9.36	3.71	1.76	0.06	0.01\n'
    + '2016 Jan 31	52.36	15.75	16.71	9.85	3.63	1.63	0.06	0.01\n'
    + '2016 Feb 1	52.62	19.09	16.1	7.98	2.88	1.28	0.05	0\n'
    + '2016 Feb 2	52.48	19.25	16.25	7.83	2.85	1.29	0.05	0\n'
    + '2016 Feb 3	52.47	19.16	16.16	7.94	2.91	1.31	0.04	0\n'
    + '2016 Feb 4	51.91	19.77	16.12	7.83	3	1.31	0.05	0.01\n'
    + '2016 Feb 5	51.76	19.36	16.44	7.78	3.15	1.44	0.06	0.01\n'
    + '2016 Feb 6	52.11	15.66	16.99	9.43	3.96	1.78	0.06	0.01\n'
    + '2016 Feb 7	52.41	15.14	17.12	9.69	3.81	1.77	0.06	0.01\n'
    + '2016 Feb 8	51.83	19.4	15.93	8.38	3.13	1.27	0.04	0\n'
    + '2016 Feb 9	52.01	19.2	16.01	8.25	3.09	1.37	0.06	0\n'
    + '2016 Feb 10	52.92	18.52	15.94	8.23	2.93	1.41	0.05	0.01\n'
    + '2016 Feb 11	52.71	18.9	16.17	7.94	2.88	1.35	0.05	0.01\n'
    + '2016 Feb 12	52.37	18.63	16.65	7.84	3.01	1.45	0.05	0.01\n'
    + '2016 Feb 13	52.73	14.69	17.33	9.38	3.92	1.87	0.07	0.01\n'
    + '2016 Feb 14	52.73	14.91	17.06	9.67	3.85	1.71	0.06	0.01\n'
    + '2016 Feb 15	52.68	17.65	16.58	8.54	3.2	1.31	0.05	0\n'
    + '2016 Feb 16	53.18	18.24	16.32	7.98	2.93	1.3	0.05	0.01\n'
    + '2016 Feb 17	52.8	18.68	16.37	7.83	2.97	1.3	0.05	0\n'
    + '2016 Feb 18	52.85	18.74	16.32	7.74	2.93	1.37	0.05	0\n'
    + '2016 Feb 19	52.5	18.49	16.7	7.75	3.08	1.43	0.05	0\n'
    + '2016 Feb 20	52.15	15.14	17.4	9.45	3.89	1.9	0.07	0.01\n'
    + '2016 Feb 21	52.1	14.95	17.14	10.17	3.9	1.66	0.07	0\n'
    + '2016 Feb 22	52.35	18.91	16.41	8.05	2.97	1.25	0.04	0\n'
    + '2016 Feb 23	52	19.19	16.48	8.07	2.97	1.25	0.04	0\n'
    + '2016 Feb 24	52.27	18.8	16.71	7.93	2.96	1.28	0.05	0\n'
    + '2016 Feb 25	52.2	18.84	16.71	7.91	2.98	1.31	0.05	0\n'
    + '2016 Feb 26	52.28	18.37	16.95	7.86	3.09	1.39	0.06	0\n'
    + '2016 Feb 27	52.63	14.89	17.29	9.44	3.9	1.77	0.06	0\n'
    + '2016 Feb 28	52.74	14.98	16.83	9.89	3.85	1.64	0.06	0.01\n'
    + '2016 Feb 29	53.2	18.53	16.18	7.88	3	1.17	0.04	0\n'
    + '2016 Mar 1	53.27	18.36	16.23	7.99	2.92	1.18	0.05	0\n'
    + '2016 Mar 2	53.37	18.14	16.21	8.14	2.89	1.19	0.05	0\n'
    + '2016 Mar 3	53.03	18.51	16.26	7.98	2.97	1.22	0.04	0\n'
    + '2016 Mar 4	52.47	18.63	16.48	7.92	3.13	1.32	0.05	0\n'
    + '2016 Mar 5	52.43	14.9	17.03	9.82	4.04	1.72	0.06	0.01\n'
    + '2016 Mar 6	52.86	14.56	16.85	10.1	3.95	1.63	0.06	0\n'
    + '2016 Mar 7	52.59	18.9	16.25	7.99	3.01	1.22	0.04	0\n'
    + '2016 Mar 8	52.75	18.59	16.36	7.99	3.01	1.24	0.05	0\n'
    + '2016 Mar 9	53.16	18.21	16.39	7.89	3.05	1.26	0.04	0\n'
    + '2016 Mar 10	52.99	18.49	16.45	7.7	3.04	1.28	0.05	0\n'
    + '2016 Mar 11	52.42	18.46	16.68	7.81	3.22	1.36	0.05	0\n'
    + '2016 Mar 12	51.86	15.55	17.13	9.46	4.16	1.78	0.06	0.01\n'
    + '2016 Mar 13	51.95	15.09	17.03	10.04	4.17	1.66	0.05	0\n'
    + '2016 Mar 14	51.94	19.4	16.23	8.01	3.16	1.21	0.04	0\n'
    + '2016 Mar 15	52.49	18.73	16.42	7.96	3.11	1.23	0.05	0.01\n'
    + '2016 Mar 16	52.41	18.66	16.61	7.85	3.17	1.26	0.05	0\n'
    + '2016 Mar 17	52.26	19.15	16.53	7.58	3.15	1.29	0.04	0.01\n'
    + '2016 Mar 18	51.98	18.86	16.76	7.69	3.3	1.37	0.05	0\n'
    + '2016 Mar 19	51.89	15.61	17	9.39	4.21	1.79	0.11	0.01\n'
    + '2016 Mar 20	51.86	15.29	16.87	9.91	4.27	1.71	0.08	0.01\n'
    + '2016 Mar 21	52.74	18.37	16.28	7.99	3.22	1.35	0.04	0\n'
    + '2016 Mar 22	52.93	18.46	16.22	7.76	3.12	1.45	0.05	0.01\n'
    + '2016 Mar 23	52.65	18.47	16.28	7.76	3.22	1.58	0.03	0\n'
    + '2016 Mar 24	52.53	18.25	16.21	8.03	3.36	1.58	0.04	0\n'
    + '2016 Mar 25	52.15	16.95	16.75	8.7	3.76	1.64	0.04	0\n'
    + '2016 Mar 26	52.24	15.04	17.07	9.52	4.23	1.85	0.04	0\n'
    + '2016 Mar 27	52.56	14.27	16.98	10.11	4.26	1.78	0.04	0\n'
    + '2016 Mar 28	53.31	17.05	16.2	8.49	3.48	1.43	0.03	0\n'
    + '2016 Mar 29	52.98	17.82	16.37	8.09	3.23	1.48	0.03	0\n'
    + '2016 Mar 30	53.07	17.84	16.37	7.96	3.27	1.45	0.04	0\n'
    + '2016 Mar 31	53.4	17.73	16.24	7.84	3.3	1.43	0.04	0\n'
    + '2016 Apr 1	52.72	18.26	16.4	7.72	3.4	1.47	0.04	0\n'
    + '2016 Apr 2	52.99	14.44	16.96	9.33	4.35	1.87	0.05	0\n'
    + '2016 Apr 3	53.29	14.13	16.7	9.8	4.2	1.82	0.06	0\n'
    + '2016 Apr 4	53.65	17.74	16.06	7.79	3.22	1.5	0.03	0\n'
    + '2016 Apr 5	53.21	18.25	16.05	7.71	3.21	1.54	0.04	0\n'
    + '2016 Apr 6	53.29	18.24	16.02	7.52	3.28	1.6	0.04	0\n'
    + '2016 Apr 7	52.77	18.33	16.26	7.56	3.35	1.69	0.03	0\n'
    + '2016 Apr 8	52.41	18.15	16.82	7.65	3.5	1.42	0.05	0\n'
    + '2016 Apr 9	52.03	15.11	17.19	9.37	4.48	1.77	0.05	0\n'
    + '2016 Apr 10	52.62	14.85	16.78	9.63	4.42	1.66	0.04	0\n'
    + '2016 Apr 11	52.54	18.79	16.17	7.73	3.37	1.34	0.07	0\n'
    + '2016 Apr 12	53.2	18.04	16.1	7.61	3.34	1.65	0.06	0\n'
    + '2016 Apr 13	53.01	17.89	16.22	7.67	3.39	1.72	0.1	0\n'
    + '2016 Apr 14	53.2	18.06	16.08	7.53	3.3	1.68	0.15	0\n'
    + '2016 Apr 15	52.96	17.82	16.32	7.52	3.46	1.81	0.12	0\n'
    + '2016 Apr 16	52.52	14.52	17.23	9.32	4.47	1.81	0.13	0\n'
    + '2016 Apr 17	52.71	14.25	16.94	9.9	4.4	1.7	0.09	0\n'
    + '2016 Apr 18	53.22	17.85	16.08	7.79	3.33	1.66	0.07	0\n'
    + '2016 Apr 19	53.51	17.76	16.19	7.77	3.27	1.43	0.06	0\n'
    + '2016 Apr 20	53.62	17.44	16.12	7.81	3.36	1.57	0.08	0\n'
    + '2016 Apr 21	53.4	17.94	15.94	7.59	3.47	1.6	0.07	0\n'
    + '2016 Apr 22	52.62	18.57	16.13	7.55	3.61	1.46	0.08	0\n'
    + '2016 Apr 23	52.42	14.46	17.12	9.44	4.72	1.75	0.09	0\n'
    + '2016 Apr 24	53.43	13.62	16.79	9.84	4.59	1.66	0.07	0.01\n'
    + '2016 Apr 25	53.48	17.72	15.98	7.79	3.46	1.5	0.06	0\n'
    + '2016 Apr 26	53.5	17.81	16.13	7.73	3.4	1.36	0.07	0\n'
    + '2016 Apr 27	53.68	17.4	16.39	7.76	3.45	1.24	0.07	0\n'
    + '2016 Apr 28	53.08	18.16	16.31	7.68	3.49	1.21	0.08	0.01\n'
    + '2016 Apr 29	53.09	17.74	16.65	7.59	3.56	1.28	0.09	0\n'
    + '2016 Apr 30	53.1	14.09	16.82	9.4	4.86	1.65	0.1	0\n'
    + '2016 May 1	52.76	13.89	16.72	10.07	4.88	1.58	0.08	0.01\n'
    + '2016 May 2	53.44	17.2	16.17	8.2	3.67	1.21	0.1	0\n'
    + '2016 May 3	52.97	17.96	16.21	7.85	3.52	1.41	0.07	0\n'
    + '2016 May 4	53.55	17.62	16.01	7.62	3.57	1.54	0.08	0\n'
    + '2016 May 5	53.76	17.45	15.92	7.6	3.63	1.57	0.08	0\n'
    + '2016 May 6	52.97	17.61	16.28	7.72	3.78	1.55	0.09	0\n'
    + '2016 May 7	51.82	14.56	17.28	9.66	4.86	1.72	0.1	0\n'
    + '2016 May 8	52.46	14.09	17.17	9.79	4.69	1.71	0.09	0\n'
    + '2016 May 9	53.05	18.2	16.1	7.92	3.58	1.08	0.06	0\n'
    + '2016 May 10	52.83	18.34	16.14	7.77	3.62	1.24	0.06	0\n'
    + '2016 May 11	53.18	17.93	16.28	7.67	3.6	1.26	0.07	0\n'
    + '2016 May 12	52.5	18.46	16.41	7.53	3.63	1.4	0.07	0\n'
    + '2016 May 13	51.81	18.58	16.66	7.6	3.77	1.48	0.09	0\n'
    + '2016 May 14	50.29	15.33	17.99	9.42	4.96	1.91	0.1	0\n'
    + '2016 May 15	51.36	14.55	17.56	9.66	4.91	1.87	0.08	0\n'
    + '2016 May 16	52.3	18.24	16.41	7.76	3.73	1.49	0.06	0\n'
    + '2016 May 17	52.05	18.88	16.42	7.64	3.57	1.37	0.06	0\n'
    + '2016 May 18	51.99	18.87	16.43	7.76	3.64	1.24	0.06	0\n'
    + '2016 May 19	51.67	19.25	16.18	7.96	3.77	1.1	0.07	0\n'
    + '2016 May 20	51.75	18.51	16.52	7.88	4.09	1.19	0.07	0\n'
    + '2016 May 21	51.83	14.13	17.6	9.54	5.19	1.62	0.07	0\n'
    + '2016 May 22	52.46	13.53	17.44	9.82	5.07	1.61	0.07	0\n'
    + '2016 May 23	52.6	18.04	16.37	7.69	3.95	1.3	0.05	0\n'
    + '2016 May 24	52.83	17.85	16.46	7.58	3.91	1.32	0.06	0\n'
    + '2016 May 25	53.16	17.45	16.35	7.6	3.99	1.39	0.06	0\n'
    + '2016 May 26	52.81	17.8	16.38	7.67	3.95	1.33	0.06	0\n'
    + '2016 May 27	52.54	17.27	16.86	7.73	4.17	1.35	0.07	0\n'
    + '2016 May 28	52.58	13.24	17.76	9.27	5.33	1.74	0.09	0\n'
    + '2016 May 29	52.85	12.95	17.78	9.34	5.29	1.72	0.07	0\n'
    + '2016 May 30	52.89	14.39	17.67	8.53	4.86	1.59	0.07	0\n'
    + '2016 May 31	53.61	17.15	16.08	7.6	4.13	1.37	0.06	0\n'
    + '2016 Jun 1	53.58	16.65	16.01	7.99	4.29	1.42	0.06	0\n'
    + '2016 Jun 2	52.76	17.4	16.35	7.81	4.29	1.33	0.06	0\n'
    + '2016 Jun 3	52.44	16.96	16.52	7.71	4.6	1.69	0.08	0\n'
    + '2016 Jun 4	52.33	12.93	17.3	9.52	5.88	1.96	0.08	0\n'
    + '2016 Jun 5	52.38	12.56	17.42	9.66	5.76	2.14	0.08	0.01\n'
    + '2016 Jun 6	52.69	17.32	16.31	7.43	4.18	2.01	0.06	0\n'
    + '2016 Jun 7	52.95	17.47	16.28	7.65	4.05	1.55	0.05	0\n'
    + '2016 Jun 8	52.68	17.66	16.3	7.6	4.14	1.56	0.06	0\n'
    + '2016 Jun 9	52.3	18.02	16.25	7.85	4.14	1.38	0.07	0\n'
    + '2016 Jun 10	52.22	17.36	16.46	7.96	4.44	1.49	0.07	0\n'
    + '2016 Jun 11	52.06	13.19	17.21	9.98	5.78	1.69	0.09	0\n'
    + '2016 Jun 12	52.09	12.75	16.89	10.65	5.96	1.6	0.05	0\n'
    + '2016 Jun 13	53.18	16.87	16.21	8.15	4.39	1.15	0.05	0\n'
    + '2016 Jun 14	53.45	17.03	16.15	7.8	4.31	1.21	0.04	0\n'
    + '2016 Jun 15	53.4	18.12	16.51	6.69	3.84	1.4	0.04	0\n');