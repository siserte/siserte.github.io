---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

<h2>Current Research Lines</h2>
<h3 style="color:gray;">Dynamic Resources in HPC Environments</h3>
<p>Leveraging the DMR malleability framework, new methods and techniques for managing dynamic resources are being investigated and developed.</p>

<h3 style="color:gray;">Offloading Programming with the OpenMP API</h3>
<p>Data Processing Units (DPUs) are a new class of programmable processor system on a chip (SoC) that combine industry-standard, high-performance, software-programmable, and processing elements (such as CPUs and GPUs) tightly coupled to the other SoC components.</p>
<p>The OpenMP programming model is enabled to support kernels offloading to DPU likewise it is done for GPU, since OpenMP 4.0, with the offload feature through DOCA. Thus, users will be able to offload computation to GPU and/or DPU indistinctively using the standard OpenMP syntaxis.</p>

<h3 style="color:gray;">HPC Workload Characterization</h3>
<p>In this collaboration with NERSC @ LBNL, we are studying the behavior of users and jobs in Cori supercomputer.  In this regard, we are analyzing data from resource requests and performance metrics.</p>

<h2>Current Projects</h2>

<h2>PhD Dissertation</h2>
<h3 style="color:gray;">High-Throughput Computation through Efficient Resource Management</h3>
<p>Scientific applications run on supercomputers where thousands of nodes are shared among users. 
    When those applications start, their resources remain allocated until the job ends. 
    We have detected two potential approaches in resource managing, with which we increase the global throughput and provide a better utilization of the underlying resources.</p>
<p>The Dynamic Management of Resource (DMR) framework is conceived to facilitate the programmability of malleable applications automating resource reallocation, process handling, and data distribution. DMR is based on the Message Passing Interface (MPI) programming model, the standard de facto for developing HPC distributed applications. DMR adjusts the process number of the jobs depending on the cluster status in terms of resource availability and quantity of pending jobs.</p>
Performance analyses have reported a makespan reduction of <strong>4x</strong>, when combined with moldability, compared to traditional rigid workloads. DMR has also been used in GPU-capable workloads improving their energy efficiency up to <strong>2.5x</strong>.
The relevance of the DMR malleability solution is such that it has been incorporated for the European projects: “The European Pilot” EuroHPC-JU, DEEP-SEA, and TimeX.

<h2>Master Thesis</h2>
<h3 style="color:gray;">A Remote GPU Manager for HPC Clusters</h3>
<p>rCUDA is a virtualization solution which allows to share GPUs among the nodes in a cluster. SLURM is a workload manager able to schedule jobs and manage resources. 
    In this project I have been in charge of the integration of both technologies, 
    since RCUDA have not got the feature of managing workloads and SLURM does not know how to share resources such as GPUs. 
    Nowadays, the RCUDA project offers this integration by applying a patch to SLURM.</p>

{% assign date1 = site.date1 | date: "%s" %}
<h2> Former Projects </h2>
{% for post in site.projects reversed %}
    {% if post.type == "research" %}
    {% assign date2 = page.date2 | date: "%s" %}
    {% if date2 < date1 %}
    {% include archive-single-project.html %}
    {% endif %}
    {% endif %}
{% endfor %}

<h2>Former Projects</h2>
<h3 style="color:gray;">Machine Learning for Fluid Mechanics</h3>
<p>Study of machine learning techniques for multi-phase fluids dynamics predictions. During this project, there have been collaborations with UPV (DSCI and DISCA) and BSC (CASE).</p>

<h3 style="color:gray;">Dynamic Management of Resources</h3>
<p>MPI applications can change the number of processes to fit better any specific computational stage or upon request from the manager. We have developed a communication layer between the resource manager and the runtime capable of reassigning resources to the jobs depending on the cluster status.</p>

<h3 style="color:gray;">GPU Cloudification</h3>
<p>Management of cloudified accelerators in clouds infrastructures.</p>

<h3 style="color:gray;">rCUDA - remote CUDA</h3>
<p>rCUDA is a virtualization solution which allows to share GPUs among the nodes in a cluster. SLURM is a workload manager able to schedule jobs and manage resources. In this project I have been in charge of the integration of both technologies, since RCUDA have not got the feature of managing workloads and SLURM does not know how to share resources such as GPUs. Nowadays, the RCUDA project offers this integration by applying a patch to SLURM.</p>

<h3 style="color:gray;">REALCLOUD - Real Data Center Cloud Services and Environment</h3>
<p>This project was carried out by several entities. We were responsible for developing a middleware what was able to consolidate the system, making decisions depending on the TI data gathered in real-time. So that, it would migrate virtual machines, turn on and shut down nodes in order to boost the performance and reduce, as much as possible the carbon footprint.</p>

<h3 style="color:gray;">MONICA - Monitoring and control system with intelligent energy efficiency management for ICT resources in ultradense data centers oriented HPC and Cloud Computing</h3>
<p>The collaboration of our research group in this project was focus on the theoretical study of the power consumption in the cluster of the FCSCL (SuperComputing Foundation of Castilla y León (Spain)).</p>

<h3 style="color:gray;">ACEI - Adjusting the Energy Consumption in Computer Facilities</h3>
<p>This project consisted in the development of a simulator to assess energy saving strategies and policies in HPC workloads. The real system Energy Saving Cluster (ESC) based on Sun Grid Engine (SGE) was modeled in order to simulate its behavior, taking into account: the different features of the components in the cluster, the scheduling and the energy saving policies and generating statistics and charts with the results. The simulator was written in Python and had a user web interface for its management.</p>





<p>DEEP-SEA (EuroHPC-JU) - P. I.: P. Radojkovic, BSC. 01/04/2021-31/03/2024. 1.1M€. Researcher. Within the scope of Work Package 3, Sergio participates in the decision-making process of the mechanisms to tackle dynamic resources. https://doi.org/10.3030/955606</p>
<p>APPWIND (Spanish Research Agency) - P. I.: S. Chiva, UJI. 01/11/2021-31/12/2024. 274K€. Work Package Leader. Sergio led Work Package 2, which aimed to create a workflow that combined CFD simulations and AI predictions. Sergio was also responsible for constructing and curating the dataset to train the predictive model.</p>
<p>APOSTD/2020 (European Social Funds) - P. I.: S. Iserte, UJI. 01/09/2020-10/12/2022. 103K€. Principal Investigator. Sergio initiated the AI-CFD research line in the group. He was the precursor of devising a  new set of data-driven techniques to accelerate long transient simulations.</p>
<p>APOTIP/2016/A/033 (Spanish Ministry of Science) - P. I.: E. S. Quintana-Ortí, UJI. 01/09/2016-31/10/2017. 13K€. Researcher. Sergio implemented a solution that automated the setup and deployment of Xeon Phi coprocessors in heterogeneous clusters.</p>
<p>FP7 318793 (European Comission) - P. I.: E. S. Quintana-Ortí , UJI. 01/10/2015-30/9/2018. 396K€. Researcher. Sergio designed, developed, and evaluated the MPI malleability framework DMR for HPC clusters.</p>
<p>H2020-FETHPC-2014 671602 (European Comission) - P. I.: E. S. Quintana-Ortí, UJI. 01/11/2012-31/10/2015. 270K€. Researcher. Sergio designed and developed an extension for Slurm to support remote GPU virtualization with the rCUDA technology.</p>
<p>INNPACTO IPT-2011-1232-43 (Spanish Ministry of Science) - P. I.: C. Cebrián, Tissat. 01/07/2011-31/12/2013. 138K€. Researcher. Sergio designed and developed a migration mechanism for virtual machines in OpenStack cloud computing infrastructure.</p>
